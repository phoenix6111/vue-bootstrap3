import Components from './components/_index';
import Notice from './components/notice';
import Snackbar from './components/snackbar';
import Loading from './components/loading';
import LoadingBar from './components/loading-bar';
const swal = require('./components/swal/sweetalert2');

const install = function (Vue,opts = {}) {
    if (install.installed) return;

    Object.keys(Components).forEach(key => Vue.component(key, Components[key]));

    Vue.use(Loading.directive);

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$loadingBar = LoadingBar;
    Vue.prototype.$swal = swal.Sweetalert2;
    Vue.prototype.$notice = Notice;
    Vue.prototype.$snackbar = Snackbar;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '0.1',
    install
};
