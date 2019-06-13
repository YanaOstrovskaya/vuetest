<template>
    <section class="sectionSeven">
        <div class="row head justify-content-center">
            <div class="col-md-12">
                <img src="../../images/register.png" alt="Login">
                <h2>Login</h2>
                <hr>
                <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        </div>

        <div class="row justify-content-center">
            <div>
                <h4>Login</h4>
                <form class="d-flex flex-column" @submit.prevent="onLogin">

                    <input class="my-2" type="text" placeholder="Email *" v-model="form.email">
                    <template v-if="errors.error">
                        <form-error :error="errors.error.email"></form-error>
                    </template>
                    <input class="my-2" type="password" placeholder="Password *" v-model="form.password" >
                    <template v-if="errors.error">
                        <form-error :error="errors.error.password"></form-error>
                    </template>
                    <button class="w-50 my-2">SUBMIT</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import FormError from '../components/FormError';
    import Auth from '../helpers/Auth';

    export default{
        components: {
            FormError
        },
        data(){
            return{
                form:
                    {
                        email:'',
                        password:'',
                    },
                errors:[]
            }
        },
        methods:{
            onLogin(){
                axios.post('/api/login', this.form)
                    .then((response) =>{
                        if(response.data.success){
                            Auth.login(response.data);
                            this.$store.commit('user/Login');
                            this.$router.push('/');
                        }
                       // console.log(response.data.errors);
                        this.$set(this.errors, 'error', response.data.errors);
                    })
                    .catch( (error) => {
                        this.$set(this.errors, 'error', error.response.data.errors);
                       // console.log(this.errors.error);
                    });
            }
        }
    }
</script>

<style>
    .head{
        text-align: center;
        color: gray;
    }
    .head img{
        width: 50px;
    }
    .sectionSeven{
        font-family: 'Spectral', serif;
        padding-bottom: 10%;
        color: gray;
    }
    .text{
        color: gray;
        font-size: 22px;
        font-family: 'Spectral', serif;
        font-weight: 300;
        margin: 0 18% 5% 18%;
    }
    table{
        width: 400px;
        font-size: 16px;
        border-collapse: separate;
        border-spacing: 20px 30px;
    }
    table>tr{
        margin: 20% 0;
    }
    form input{
        width: 350px;
        height: 40px;
        text-indent: 15px;
        border: 2px solid #B8B8B8;
    }
    form select{
        width: 350px;
        height: 40px;
        text-indent: 15px;
        border: 2px solid #B8B8B8;
    }
    form textarea{
        width: 350px;
        height: 120px;
        text-indent: 15px;
        border: 2px solid #B8B8B8;
    }
    form *{
        /*margin: 10px;*/
        border-radius: 5px;
        font-size: 18px;
    }
    form button{
        background: coral;
        border: 1px solid orange;
        text-align:center;
        color: white;
    }
    form div{
        width: 350px;
    }
</style>