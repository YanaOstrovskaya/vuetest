export default {
    namespaced: true,
    state: {
        nav:[
            {path: '/', title: 'Home', auth: 'both'},
            {path: '/futures', title: 'Futures', auth:true },
            {path: '/menu', title: 'Menu', auth:true },
            {path: '/events', title: 'Events', auth:true },
            {path: '/reserve', title: 'Reserve', auth:true },

        ],

        navAuth:[
            {path: '/register', title: 'Register', auth:false },
            {path: '/login', title: 'Login', auth:false },
        ],

        profileNav:[
            {path: '/logout', title: 'Logout', auth:true }
        ]

    },
    getters: {
        nav(state) {
            return state.nav;
        },
        navAuth(state) {
            return state.navAuth;
        },
        profileNav(state){
            return state.profileNav;
        }
    }
};