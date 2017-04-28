import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: (resolve) =>{
                require(['../views/buttons.vue'],resolve);
            }
        }, {
            path: '/buttons',
            name:'Buttons',
            component: (resolve) =>{
                require(['../views/buttons.vue'],resolve);
            }
        }, {
            path:'/icons',
            name:'Icons',
            component: (resolve) =>{
                require(['../views/icons.vue'],resolve);
            }
        }, {
            path: '/alerts',
            name:'Alerts',
            component: (resolve) =>{
                require(['../views/alerts.vue'],resolve);
            }
        }, {
            path: '/carousels',
            name: 'Carousels',
            component: (resolve) =>{
                require(['../views/carousels.vue'],resolve);
            }
        }, {
            path: '/switchs',
            name:'Switchs',
            component: (resolve) =>{
                require(['../views/switchs.vue'],resolve);
            }
        }, {
            path: '/rates',
            name:'Rates',
            component: (resolve) =>{
                require(['../views/rates.vue'],resolve);
            }
        }, {
            path: '/tags',
            name:'Tags',
            component: (resolve) =>{
                require(['../views/tags.vue'],resolve);
            }
        }, {
            path: '/tooltips',
            name:'Tooltips',
            component: (resolve) =>{
                require(['../views/tooltips.vue'],resolve);
            }
        }, {
            path: '/popovers',
            name:'Popovers',
            component: (resolve) =>{
                require(['../views/popovers.vue'],resolve);
            }
        }, {
            path: '/progresses',
            name: 'Progresses',
            component: (resolve) =>{
                require(['../views/progresses.vue'],resolve);
            }
        }, {
            path: '/collapses',
            name: 'Collapses',
            component: (resolve) =>{
                require(['../views/collapses.vue'],resolve);
            }
        }, {
            path: '/tabsdemo',
            name:'TabsDemo',
            component: (resolve) =>{
                require(['../views/tabs-demo.vue'],resolve);
            }
        }, {
            path:'/menus',
            name:'Menus',
            component: (resolve) =>{
                require(['../views/menus.vue'],resolve);
            }
        }, {
            path: '/modals',
            name:'Modals',
            component: (resolve) =>{
                require(['../views/modals.vue'],resolve);
            }
        }, {
            path: '/swals',
            name: 'Swals',
            component: (resolve) =>{
                require(['../views/swals.vue'],resolve);
            }
        }, {
            path: '/radios',
            name:'Radios',
            component: (resolve) =>{
                require(['../views/radios.vue'],resolve);
            }
        }, {
            path:'/checkboxs',
            name:'Checkboxs',
            component: (resolve) =>{
                require(['../views/checkboxs.vue'],resolve);
            }
        }, {
            path:'/dropdowns',
            name:'Dropdowns',
            component: (resolve) =>{
                require(['../views/dropdowns.vue'],resolve);
            }
        }, {
            path:'/sliders',
            name:'Sliders',
            component: (resolve) =>{
                require(['../views/sliders.vue'],resolve);
            }
        }, {
            path:'/notices',
            name:'Notices',
            component: (resolve) =>{
                require(['../views/notices.vue'],resolve);
            }
        }, {
            path:'/snackbars',
            name:'Snackbars',
            component: (resolve) =>{
                require(['../views/snackbars.vue'],resolve);
            }
        }, {
            path:'/loadings',
            name:'Loadings',
            component: (resolve) =>{
                require(['../views/loadings.vue'],resolve);
            }
        }, {
            path:'/inputs',
            name:'Inputs',
            component: (resolve) =>{
                require(['../views/inputs.vue'],resolve);
            }
        }, {
            path:'/input_numbers',
            name:'InputNumbers',
            component: (resolve) =>{
                require(['../views/input-numbers.vue'],resolve);
            }
        }, {
            path:'/selects',
            name:'Selects',
            component: (resolve) =>{
                require(['../views/selects.vue'],resolve);
            }
        }, {
            path:'/forms',
            name:'Forms',
            component: (resolve) =>{
                require(['../views/forms.vue'],resolve);
            }
        }, {
            path:'/uploads',
            name:'Uploads',
            component: (resolve) =>{
                require(['../views/uploads.vue'],resolve);
            }
        }, {
            path:'/tables',
            name:'Tables',
            component: (resolve) =>{
                require(['../views/tables.vue'],resolve);
            }
        }, {
            path:'/tables2',
            name:'Tables2',
            component: (resolve) =>{
                require(['../views/tables2.vue'],resolve);
            }
        }, {
            path:'/circles',
            name:'Circles',
            component: (resolve) =>{
                require(['../views/circles.vue'],resolve);
            }
        }, {
            path:'/paginations',
            name:'Paginations',
            component: (resolve) =>{
                require(['../views/paginations.vue'],resolve);
            }
        },{
            path:'/affixs',
            name:'affixs',
            component: (resolve) =>{
                require(['../views/affixs.vue'],resolve);
            }
        },{
            path:'/backtops',
            name:'backtops',
            component: (resolve) =>{
                require(['../views/backtops.vue'],resolve);
            }
        },{
            path:'/cards',
            name:'Cards',
            component: (resolve) =>{
                require(['../views/cards.vue'],resolve);
            }
        }, {
            path:'/codeboxs',
            name:'CodeBoxs',
            component: (resolve) => {
                require(['../views/code-boxs.vue'],resolve);
            }
        }

    ]
})
