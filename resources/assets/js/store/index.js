import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import user from './modules/user';
import menu from './modules/menu';
// import cart from './modules/cart';

export const store = new Vuex.Store({
    modules: {
        user,
         menu,
        // cart
    },
    strict: process.env.NODE_ENV !== 'production'
});