import Vue from 'vue'
import Router from 'vue-router'
import Buttons from '../components/Buttons';
import Icons from '../components/Icons';
import Alerts from '../components/Alerts';
import Carousels from '../components/Carousels';
import Switchs from '../components/Switchs';
import Rates from '../components/Rates';
import Tags from '../components/Tags';
import Tooltips from '../components/Tooltips';
import Popovers from '../components/Popovers';
import Progresses from '../components/Progresses';
import Collapses from '../components/Collapses';
import TabsDemo from '../components/TabsDemo';
import Menus from '../components/Menus';
import Modals from '../components/Modals';
import Swals from '../components/Swals';
import Radios from '../components/Radios';
import Checkboxs from '../components/checkboxs';
import Dropdowns from '../components/Dropdowns';
import Sliders from '../components/sliders';
import Notices from '../components/Notices.vue';
import Snackbars from '../components/Snackbars';
import Loadings from '../components/Loadings';
import Inputs from '../components/inputs';
import InputNumbers from '../components/InputNumbers';
import Selects from '../components/Selects';
import Forms from '../components/Forms.vue';
import Uploads from '../components/Uploads';
import Tables from '../components/tables';
import Tables2 from '../components/tables2';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Buttons
        }, {
            path: '/buttons',
            name:'Buttons',
            component:Buttons
        }, {
            path:'/icons',
            name:'Icons',
            component:Icons
        }, {
            path: '/alerts',
            name:'Alerts',
            component: Alerts
        }, {
            path: '/carousels',
            name: 'Carousels',
            component: Carousels
        }, {
            path: '/switchs',
            name:'Switchs',
            component:Switchs
        }, {
            path: '/rates',
            name:'Rates',
            component: Rates
        }, {
            path: '/tags',
            name:'Tags',
            component: Tags
        }, {
            path: '/tooltips',
            name:'Tooltips',
            component: Tooltips
        }, {
            path: '/popovers',
            name:'Popovers',
            component: Popovers
        }, {
            path: '/progresses',
            name: 'Progresses',
            component: Progresses
        }, {
            path: '/collapses',
            name: 'Collapses',
            component: Collapses
        }, {
            path: '/tabsdemo',
            name:'TabsDemo',
            component:TabsDemo
        }, {
            path:'/menus',
            name:'Menus',
            component:Menus
        }, {
            path: '/modals',
            name:'Modals',
            component:Modals
        }, {
            path: '/swals',
            name: 'Swals',
            component:Swals
        }, {
            path: '/radios',
            name:'Radios',
            component:Radios
        }, {
            path:'/checkboxs',
            name:'Checkboxs',
            component:Checkboxs
        }, {
            path:'/dropdowns',
            name:'Dropdowns',
            component:Dropdowns
        }, {
            path:'/sliders',
            name:'Sliders',
            component:Sliders
        }, {
            path:'/notices',
            name:'Notices',
            component:Notices
        }, {
            path:'/snackbars',
            name:'Snackbars',
            component:Snackbars
        }, {
            path:'/loadings',
            name:'Loadings',
            component:Loadings
        }, {
            path:'/inputs',
            name:'Inputs',
            component:Inputs
        }, {
            path:'/input_numbers',
            name:'InputNumbers',
            component:InputNumbers
        }, {
            path:'/selects',
            name:'Selects',
            component:Selects
        }, {
            path:'/forms',
            name:'Forms',
            component:Forms
        }, {
            path:'/uploads',
            name:'Uploads',
            component:Uploads
        }, {
            path:'/tables',
            name:'Tables',
            component:Tables
        }, {
            path:'/tables2',
            name:'Tables2',
            component:Tables2
        }

    ]
})
