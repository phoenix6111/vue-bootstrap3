var path = require('path');
var utils = require('./utils');
var config = require('../config');
var slugify = require('transliteration').slugify;
var hljs = require('highlight.js');
var striptags = require('./strip-tags');

/**
 * `{{ }}` => `<span>{{</span> <span>}}</span>`
 * @param  {string} str
 * @return {string}
 */
var replaceDelimiters = function (str) {
    return str.replace(/({{|}})/g, '<span>$1</span>');
};

/**
 * renderHighlight
 * @param  {string} str
 * @param  {string} lang
 */

var renderHighlight = function (str, lang) {
    if (!(lang && hljs.getLanguage(lang))) {
        return '';
    }

    try {
        return replaceDelimiters(hljs.highlight(lang, str, true).value);
    } catch (err) {}
};

function convert(str) {
    str = str.replace(/(&#x)(\w{4});/gi, function($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
}

function wrap(render) {
    return function() {
        return render.apply(this, arguments)
            .replace('<code class="', '<code class="hljs ')
            .replace('<code>', '<code class="hljs">');
    };
};

const md = require('markdown-it')('default',{
    html: true,
    breaks: true,
    highlight: renderHighlight
})
md.use(require('markdown-it-anchor'),{
        level: 2,
        slugify: slugify,
        permalink: true,
        permalinkBefore: true
    })
    .use(require('markdown-it-container'), 'demo', {

    validate: function(params) {
        return params.trim().match(/^demo\s*(.*)$/);
    },

    render: function (tokens, idx) {
        // var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
            // var description = (m && m.length > 1) ? m[1] : '';
            var summaryContent = tokens[idx + 1].content;
            var summary = striptags.fetch(summaryContent, 'summary');
            var summaryHTML = summary ? md.render(summary) : '';

            var content = tokens[idx + 2].content;
            var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
            var script = striptags.fetch(content, 'script');
            var style = striptags.fetch(content, 'style');
            var code = tokens[idx + 2].markup + tokens[idx + 2].info + '\n' + content + tokens[idx + 2].markup;
            var codeHtml = code ? md.render(code) : '';

            var jsfiddle = { html: html, script: script, style: style };
            jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

            // opening tag
            return `<demo-box :jsfiddle="${jsfiddle}">
                  <div class="box-demo-show" slot="component">${html}</div>
                  <div slot="description">${summaryHTML}</div>
                  <div class="highlight" slot="code">${codeHtml}</div>
                `;

        } else {
            // closing tag
            return '</demo-box>\n';
        }
    }
})
md.renderer.rules.table_open = function() {
    return '<table class="table">';
};
md.renderer.rules.fence = wrap(md.renderer.rules.fence);

function convert(str) {
    str = str.replace(/(&#x)(\w{4});/gi, function($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
}

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    module: {
        rules: [
            {
                test: /\.md/,
                loader: 'vue-markdown-loader',
                options: md,
            }
        ]
    }
};
