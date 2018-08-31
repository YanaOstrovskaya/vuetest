<template>
    <section class="sectionSeven">
        <div class="row head">
            <div class="col-md-12">
                <img src="../../images/0203-coffee-love.png" alt="Coffee">
                <h2>Reserve a table</h2>
                <hr>
                <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h4>Contact Info</h4>
                <table>
                    <tr>
                        <td> <font-awesome-icon icon="home" /></td>
                        <td>5555 Pfgdds Tyufd, 6475 New York, Htdxf KSdseryte</td>
                    </tr>
                    <tr>
                        <td> <font-awesome-icon icon="phone" /></td>
                        <td>(123) 87-67-45</td>
                    </tr>
                    <tr>
                        <td> <font-awesome-icon icon="envelope" /></td>
                        <td>foodeee@info.com</td>
                    </tr>
                    <tr>
                        <td> <font-awesome-icon icon="globe" /></td>
                        <td><a href="#">foodee.com</a></td>
                    </tr>
                </table>
            </div>

            <div class="col">
                <h4>Reservation Form</h4>
                <form @submit.prevent="onReserved" class="d-flex flex-column">
                    <div class="alert alert-success" v-if="success">Message send</div>
                    <input class="my-2" type="text" placeholder="Name" v-model="name">
                    <template v-if="errors.error">
                        <form-error :error="errors.error.name"></form-error>
                    </template>
                    <input class="my-2" type="email" placeholder="Email" v-model="email">
                    <template v-if="errors.error">
                        <form-error :error="errors.error.email"></form-error>
                    </template>
                    <select class="my-2" v-model="event" >
                        <option  disabled  value="">Select to Occation</option>
                        <option value="Kitchen Workshop">Kitchen Workshop</option>
                        <option value="Music concerts">Music concerts</option>
                        <option value="Free to Eat Party">Free to Eat Party</option>
                    </select>
                    <template v-if="errors.error">
                        <form-error :error="errors.error.event"></form-error>
                    </template>
                    <input class="my-2" type="text" placeholder="Date and Time" v-model="date">
                    <template v-if="errors.error">
                        <form-error :error="errors.error.date"></form-error>
                    </template>
                    <textarea class="my-2" placeholder="Message" v-model="message"></textarea>
                    <template v-if="errors.error">
                        <!--<form-error :error="errors.error.message"></form-error>-->
                        <span class="error" v-if="errors.error.message">{{errors.error.message[0]}}</span>
                    </template>
                    <button class="w-50 my-2">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import FormError from '../components/FormError';
    export default {
        components: {
            FormError
        },
        data(){
            return{
                name:'',
                email:'',
                event:'',
                date:'',
                message:'',
                errors:[],
                success:''
            }
        },
        methods:{
            onReserved(){
                axios.post('/api/reserve/', {
                    name: this.name,
                    email: this.email,
                    event: this.event,
                    date: this.date,
                    message: this.message
                }).then((response) =>{
                    this.$set(this.errors, 'error', []);
                    this.success = 'success';
                    this.name = '';
                    this.email = '';
                    this.event = '';
                    this.date = '';
                    this.message = '';
                    console.log(response.data);
                }).catch( (error) => {
                    this.$set(this.errors, 'error', error.response.data.errors);
                    console.log(this.errors.error);
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