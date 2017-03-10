import Vue from 'vue'
import Router from 'vue-router'
import Buttons from '../components/Buttons';
import Icons from '../components/Icons';
import Alerts from '../components/Alerts';
import Carousels from '../components/Carousels';
import Switchs from '../components/Switchs';
import Rates from '../components/Rates';

Vue.use(Router)

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
        }

    ]
})
