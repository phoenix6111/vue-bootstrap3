import Components from './components/_index';
import Notice from './components/notice';
import Message from './components/message';
import MessageBox from './components/message-box';
import Swal from './components/sweet-alert';
import Snackbar from './components/snackbar';
import Loading from './components/loading';
import LoadingBar from './components/loading-bar';

const install = function (Vue,opts = {}) {
    if (install.installed) return;

    Object.keys(Components).forEach(key => Vue.component(key, Components[key]));

    Vue.use(Loading.directive);

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$loadingBar = LoadingBar;
    Vue.prototype.$notice = Notice;
    Vue.prototype.$snackbar = Snackbar;

    Vue.prototype.$modal = MessageBox;
    Vue.prototype.$modalAlert = MessageBox.alert;
    Vue.prototype.$modalConfirm = MessageBox.confirm;
    Vue.prototype.$modalPrompt = MessageBox.prompt;

    Vue.prototype.$swal = Swal;
    Vue.prototype.$alert = Swal.alert;
    Vue.prototype.$confirm = Swal.confirm;
    Vue.prototype.$prompt = Swal.prompt;

    Vue.prototype.$message = Message;

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '0.1',
    install
};
