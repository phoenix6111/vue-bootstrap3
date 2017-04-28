// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from '../src';

import CodeTransform from './directives/code-transform';
import BeautyCode from './directives/beauty-code';

Vue.use(iview);
Vue.use(CodeTransform);
Vue.use(BeautyCode);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
