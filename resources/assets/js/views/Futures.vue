<template>
<div class="futures">
    <section class="sectionThree">
        <div class="row">
            <div class="col">
                <img src="../../images/0103-served-plate_64.png" alt="">
                <h2>Featured Dishes</h2>
                <hr>
                <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div class="row box">
                    <div class="col-md-3 boxOne">
                        <i class="fas fa-caret-left left1"></i>
                    </div>
                    <div class="col-md-3 boxTwo">
                        <h5 class="chapter">Fresh Mushrooms</h5>
                        <hr>
                        <h3>$ 7.50</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="col-md-3 boxThree">
                        <div class="row row1">
                            <div class="col-md-12">
                                <i class="fas fa-caret-left left2"></i>
                            </div>
                        </div>
                        <div class="row row2">
                            <div class="col-md-12">
                                <h5>Cheese and Garlic Toast</h5>
                                <hr>
                                <h3>$ 4.50</h3>
                                <p>Far far away, behind the word mountains.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 boxFour">
                        <div class="row row1">
                            <div class="col-md-12">
                                <h5>Grilled Chiken Salad</h5>
                                <hr>
                                <h3>$ 12.00</h3>
                                <p>Far far away, behind the word mountains.</p>
                            </div>
                        </div>
                        <div class="row row2">
                            <div class="col-md-12">
                                <i class="fas fa-caret-right right1"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="sectionFour">
        <div class="boxSection row">
            <div class="col-md-3">
                <img src="../../images/type-1.png" alt="Fruits" class="imgSection">
                <br><br>
                <h4>Fruits</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div class="col-md-3">
                <img src="../../images/type-2.png" alt="Sea food" class="imgSection">
                <br><br>
                <h4>Sea food</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div class="col-md-3">
                <img src="../../images/type-3.png" alt="Vegetables" class="imgSection">
                <br><br>
                <h4>Vegetables</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div class="col-md-3">
                <img src="../../images/type-4.png" alt="Meat" class="imgSection">
                <br><br>
                <h4>Meat</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
        }
    }
</script>

<style>

    .sectionThree{

        background-image: url('../../images/wood_1.png');
        text-align: center;
    }
    .sectionThree img{
        margin-top: 5%;
    }
    .sectionThree h2{
        color: white;
        font-family: 'Spectral', serif;
        font-weight: 300;
    }
    .sectionThree .text{
        color: gray;
        font-size: 22px;
        font-family: 'Spectral', serif;
        font-weight: 300;
        margin: 0 18% 5% 18%;
    }
    .sectionThree .box>div{
        color: #404040;
        font-family: 'Source Sans Pro', sans-serif;
    }

    .sectionThree .box{
        margin: 0 10%;
    }
    .sectionThree .box>div>p{
        color: gray;
        font-size: 17px;
    }
    .boxTwo{
        background: antiquewhite;
        padding-top: 5%;
    }
    .boxOne{
        background-image: url('../../images/res_img_6.jpg');
        background-size: 100% 100%;
    }
    .left1{
        color: antiquewhite;
        font-size: 35px;
        position: absolute;
        right: -2px;
        top: 40px;
    }
    .boxThree{
        background-image: url('../../images/res_img_2.jpg');
        background-size: 100% 100%;
    }
    .boxThree .row1{
        margin-top: 120%;
    }
    .left2{
        color: #e6faff;
        font-size: 35px;
        position: absolute;
        right: -2px;
        bottom: 160px;
    }
    .boxThree .row2{
        background: #e6faff;
        padding-top: 5%;
    }
    .boxFour{
        background-image: url('../../images/res_img_7.jpg');
        background-size: 100% 100%;
    }
    .boxFour .row1{
        background: #e6faff;
        padding-top: 5%;
        padding-bottom: 30%;
    }
    .right1{
        color: #e6faff;
        font-size: 35px;
        position: absolute;
        left: -2px;
        top: 40px;
    }
    .sectionFour{
        background: black;
        color: white;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 100;
    }
    .boxSection{
        text-align: center;
        margin: 0 10%;
        padding: 5% 0;
    }
    .imgSection{
        border: 1px solid white;
        border-radius: 50%;
        padding: 10px;
    }
</style>