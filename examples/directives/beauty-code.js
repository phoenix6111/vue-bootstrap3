import Hljs from 'highlight.js'
import beautify from 'beautify';

export default {
    install(Vue) {
        Vue.directive('beauty-code', {
            update(el,binding,vnode) {
                let codeNode = el.querySelector('code');
                if(codeNode.innerHTML) {
                    const type = binding.arg;
                    let innerCode = codeNode.textContent;
                    innerCode = beautify(innerCode, {format: type});
                    codeNode.textContent = innerCode;

                    codeNode = Hljs.highlightBlock(codeNode);
                }

            }
        });
    }
}