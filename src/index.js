import Components from './components/_index';

const install = function (Vue,opts = {}) {
    if (install.installed) return;

    Object.keys(Components).forEach(key => Vue.component(key, Components[key]));

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '0.1',
    install
};
