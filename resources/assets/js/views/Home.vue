<template>
    <div class="home">
    <section class="sectionOne">
        <div class="row">
            <div class="col-md-6 one">
            </div>
            <div class="col-md-6 two">
                <h3>About Us</h3>
                <hr>
                <p><span>F</span>ar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div class="center">
                    <button>GET IN TOUCH</button>
                </div>
            </div>
        </div>
    </section>

    <section class="sectionTwo">
        <div class="d-flex align-items-start flex-column" v-if="citations.length">
            <div class="col" >
                <transition name="slide">
                    <template v-for="(citation, index) in citations">
                        <div class="animate" 
                            :key="citation.quote"
                            v-if="citations[index].show">

                            <p class="quote">"{{citation.quote}}"</p>
                            <p class="author"> - {{citation.author}}</p>

                        </div>
                    </template>
                </transition>
                </div>
                <div class="col circle">
                    <div v-for="(citation, index) in citations" :key="index" @click="showSlide(index)" :class="{'activeCircle': citation.show}"></div>
                </div>
            
        </div>
    </section>
    </div>
</template>

<script>
    export default {
        created(){
            if(!this.$store.getters['user/auth'].login){
                this.$router.push('/login');
            }
        },
        data(){
            return{
                citations:[],
                activeIndex: 0,
            }
    },
        methods: {
            showSlide(index) {
                this.citations[this.activeIndex].show = false;
                this.citations[index].show = true;
                this.activeIndex = index;
            }
        },

        created(){
            axios.get('/api/citations/')
                 .then(response => {
                     this.citations = response.data
                     for(let i = 0; i < this.citations.length; i++){
                         if(i == 0) {
                             Vue.set(this.citations[i], 'show', true)
                         } else {
                             Vue.set(this.citations[i], 'show', false)
                         }

                     }
                 })
        }
    }
</script>

<style>
    .sectionOne{
        display: flex;
    }
    .sectionOne .one{
        background-image: url('../../images/res_img_6.jpg');
        background-size: 100% 100%;
    }
    .sectionOne .two{
        padding: 2% 10%;

        color: white;
        font-family: 'Spectral', serif;
        background-image: url('../../images/wood_1.png');
    }
    hr{
        text-align: center;
        background: coral;
        width: 50px;
        height: 2px;
    }
    .sectionOne .two h3{
        text-align: center;
        font-style: italic;
        font-weight: lighter;
    }
    .sectionOne .two p span{
        font-size: 70px;
        float: left;
        margin-top: -13%;
        font-style: italic;
        padding: 0 10px;
        margin-right: 3%;
        box-sizing: border-box;
        height: 70px;
        color: white;
    }
    .sectionOne .two p{
        font-size: 20px;
        color: gray;
    }
    .center{
        text-align: center;
    }
    .sectionOne .two button{
        text-align: center;
        border: 2px solid coral;
        border-radius: 5px;
        background: rgba(0,0,0,0);
        color: white;
    }
    .sectionTwo{
        height: 250px;
        margin: 50px 0;
        margin-left: 20px;
    }
    .sectionTwo > div{
        height: 500px;
    }
    .sectionTwo .quote{
        font-size: 36px;
        font-style: inherit;
    }
    .sectionTwo .author{
        font-size: 20px;
        font-style: inherit;
        color: gray;
    }
    .sectionTwo .circle div{
        display: inline-block;
        width: 15px;
        height: 15px;
        background: gray;
        border-radius: 50%;
        margin: 5px;
    }
    .sectionTwo .circle div:hover{
        border: 2px solid coral;
        background: white;
    }
    .sectionTwo .circle .activeCircle{
        border: 2px solid coral;
        background: white;
    }
    .sectionTwo .circle{
        display: flex;
        margin: 50px;
        justify-content: center;
    }
    .slide-enter-active {
       animation: slideIn 1s;
    }
   .slide-leave-active {
        animation: slideOut 1s;
    }
    .slide-leave {
        position: absolute;
    }
    .slide-leave-to {
        position: absolute;
    }
    @keyframes slideIn {
        from{transform: translateX(2000px);}
        to{transform: translateX(0px);}
    }
    @keyframes slideOut {
        from{transform: translateX(0px);}
        to{transform: translateX(-2000px);}
    }
</style>
