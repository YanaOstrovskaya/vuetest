<template>
    <section class="sectionSix">
        <div class="row head">
            <div class="col-md-12">
            <img src="../../images/0402-chef.png" alt="">
            <h2>Upcoming Events</h2>
            <hr>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        </div>

        <div class="events">
            <div class="row">
            <div class="col-md">
                <h5>Kitchen Workshop</h5>
                <h6>March 19th, 2018</h6>
                <hr>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <button>READ MORE</button>
            </div>
            <div class="col-md">
                <h5>Music concerts</h5>
                <h6>March 23th, 2018</h6>
                <hr>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <button>READ MORE</button>
            </div>
            <div class="col-md">
                <h5>Free to Eat Party</h5>
                <h6>March 19th, 2018</h6>
                <hr>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <button>READ MORE</button>
            </div>
            </div>

        </div>
    </section>
</template>

<style>
    .sectionSix{
        background-image: url("../../images/slide_1.jpg");
        text-align: center;
        box-sizing: border-box;
        font-family: 'Spectral', serif;
        padding-bottom: 10%;
    }
    .head{
        color: white;
    }
    .text{
        color: gray;
        font-size: 22px;
        font-family: 'Spectral', serif;
        font-weight: 300;
        margin: 0 18% 5% 18%;

    }
    .events{
        margin: 0 10%;

    }
    .events>div{

    }
    .events>div>div{

        outline: 1px solid gray;
        outline-offset: -10px;

        padding: 25px;
        margin: 0 5px;
        background: white;

        color: gray;
    }
    .events>div>div p{
        font-size: 20px;
    }
    .events>div>div button{
        border: 1px solid coral;
        border-radius: 2px;
        color: coral;
    }
</style>