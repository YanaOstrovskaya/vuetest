import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: require('./views/Home')
    },
    {
        path: '/futures',
        name: 'futures',
        component: require('./views/Futures')
    },
    {
        path: '/menu',
        name: 'menu',
        component: require('./views/Menu')
    },
    {
        path: '/events',
        name: 'events',
        component: require('./views/Events')
    },
    {
        path: '/reserve',
        name: 'reserve',
        component: require('./views/Reserve')
    },
    {
        path: '/register',
        name: 'register',
        component: require('./views/Register')
    },
    {
        path: '/login',
        name: 'login',
        component: require('./views/Login')
    }
];
export const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active',
     mode: 'history'
});