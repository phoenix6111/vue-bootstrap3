import Components from './components/_index';
import Message from './components/message';
const swal = require('./components/swal/sweetalert2');

const install = function (Vue,opts = {}) {
    if (install.installed) return;

    Object.keys(Components).forEach(key => Vue.component(key, Components[key]));
    Vue.prototype.$swal = swal.Sweetalert2;
    Vue.prototype.$msg = Message;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '0.1',
    install
};
