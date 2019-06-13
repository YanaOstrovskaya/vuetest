export default {
    namespaced: true,
    state: {
        Auth:{
            login:false,
            user_id:null,
            api_token:null,
            name:null
        },
        Registered:{
            registered:false,
            name:null,
            email:null,
            user_id:null
        }
    },
    getters: {
        auth(state) {
            return state.Auth;
        },
        registered(state){
            return state.Registered;
        }
    },
    mutations: {
        Login(state){
            state.Auth.user_id = localStorage.getItem("user_id");
            state.Auth.api_token = localStorage.getItem("api_token");
            state.Auth.name = localStorage.getItem("name");
            state.Auth.login =
                state.Auth.user_id !== null &&
                state.Auth.api_token !== null &&
                state.Auth.name !== null;
        },
        Register(state){
            state.Registered.name = localStorage.getItem('name');

        }
    },
    actions: {

    }
};