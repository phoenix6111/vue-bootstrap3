// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './app'
import routes from './router'
import bsView from '../src';
import Components from './components';

Vue.use(VueRouter);
Vue.use(bsView);
Vue.use(Components);

Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
});

/*router.afterEach(route => {
    const data = title[route.meta.lang];
    for (let val in data) {
        if (new RegExp('^' + val, 'g').test(route.name)) {
            document.title = data[val];
            return;
        }
    }
    document.title = 'Vue Bootstrap3';
});*/

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
