<template>
    <section class="sectionSeven">
        <div class="row head justify-content-center">
            <div class="col-md-12">
                <img src="../../images/register.png" alt="Coffee">
                <h2>Register</h2>
                <hr>
                <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        </div>

        <div class="row justify-content-center">
            <div>
                <h4>Register</h4>
                <form class="d-flex flex-column" @submit.prevent="onRegister">

                    <input class="my-2" type="text" placeholder="Name" v-model="form.name">

                    <input class="my-2" type="email" placeholder="Email" v-model="form.email">

                    <input class="my-2" type="password" placeholder="Password" v-model="form.password" >

                    <input class="my-2" type="password" placeholder="Confirm password" v-model="form.password_confirm" >

                    <button class="w-50 my-2">SUBMIT</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        data(){
            return{
                form:
                    {
                        name:'',
                        email:'',
                        password:'',
                        password_confirm:''
                    },
                errors:{}
            }
        },
        methods:{
            onRegister(){
                axios.post('/api/register/', this.form)
                    .then((response) =>{
                        console.log(response.data);
                    })
                    .catch( (error) => {
                   // this.errors = error.response.data.errors;
                    console.log(error.message);
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