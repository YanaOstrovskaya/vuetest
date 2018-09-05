<!--suppress ALL -->
<template>
    <nav>
        <div class="row">
            <div class="col">
                <ul>

                    <router-link v-for="(item, index) in menu"
                                 :key="item.path"
                                 :to="item.path"
                                 v-if="item.auth === 'both'"
                                 tag="li"
                                 exact
                    >
                        <a>{{ item.title }}</a>
                    </router-link>

                    <router-link v-for="(item, index) in navAuth"
                                 :key="item.path"
                                 :to="item.path"
                                 v-if="item.auth === auth.login"
                                 tag="li"
                                 exact
                                 class="navAuth"
                    >
                        <a>{{ item.title }}</a>
                    </router-link>

                    <li v-if="auth.login"
                                 v-for="item in profileNav"
                                 @click="onClick(item)"
                                 :to="item.path"
                                 tag="li"
                                 :key="item.title"
                                class="logout"

                    >
                        <span><font-awesome-icon icon="sign-out-alt" />{{item.title}}</span>
                    </li>



                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex';
    import {mapGetters} from 'vuex';
    import Auth from '../helpers/Auth';

    export default {
        created(){
            this.$store.commit('user/Login');
            //console.log('dd');
        },
        computed:{
            ...mapGetters('menu', {
                menu: 'nav',
                profileNav: 'profileNav',
                navAuth: 'navAuth'
            }),
            ...mapGetters('user', {
                auth: 'auth'
            }),
            // auth(){
            //     return false;
            // },

        },
        methods:{
            onClick(item){
               if(item.path !== '/logout'){
                   this.$router.push(item.path);
                   return true;
               }
                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.auth.api_token;
               axios.post('/api/logout')
                   .then((response)=>{
                       if(response.data.success){
                           Auth.logout();
                           this.$store.commit('user/Login');
                           this.$router.push('/');
                       }
                   })

            }
        }
    }
</script>

<style>
    .logout{
        cursor:pointer;
    }
    .navAuth{
        float: right;
    }
    nav>div{
        border: 2px solid gainsboro;
    }
    nav ul{
        /*display: flex;*/
        /*justify-content: space-between;*/
        text-align: center;
        margin: 0 100px;
        font-family: 'Spectral', serif;
        font-size: 150%;
    }
    nav ul li{
        display: inline;
        padding: 10px;
        line-height: 170%;
    }
    nav ul li a{
        font-size: 20px;
        text-decoration: none;
        color: black;
        vertical-align: middle;
    }
    nav ul li .logo{
        font-size: 36px;
        font-style: italic;
    }
    nav ul li a:hover{
        text-decoration: none;
        color: coral;
    }
</style>