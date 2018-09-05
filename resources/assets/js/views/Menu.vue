<template>
    <section class="sectionFive">
        <div class="head">
        <img src="../../images/0401-vegan.png" alt="">
        <h2>Food Menu</h2>
        <hr>
        <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>

        <table>
            <thead>
            <tr>
                <th colspan="3"><img src="../../images/0301-pina-colada_64.png" alt="Drinks">Drinks</th>


                <th colspan="3"><img src="../../images/0302-steak.png" alt="Steak">Steak</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td><img src="../../images/res_img_1.jpg" alt="juice"></td>
                <td>Pineapple juice <p>Far far away, behind the word mountains</p></td>
                <td>$ 17.50</td>
                <td><img src="../../images/res_img_2.jpg" alt="juice"></td>
                <td>Beaf steak <p>Far far away, behind the word mountains</p></td>
                <td>$ 17.50</td>
            </tr>
            <tr>
                <td><img src="../../images/res_img_1.jpg" alt="juice"></td>
                <td>Pineapple juice <p>Far far away, behind the word mountains</p></td>
                <td>$ 17.50</td>
                <td><img src="../../images/res_img_2.jpg" alt="juice"></td>
                <td>Beaf steak <p>Far far away, behind the word mountains</p></td>
                <td>$ 17.50</td>
            </tr>
            <tr>
                <td><img src="../../images/res_img_1.jpg" alt="juice"></td>
                <td>Pineapple juice <p>Far far away, behind the word mountains</p></td>
                <td>$ 17.50</td>
                <td><img src="../../images/res_img_2.jpg" alt="juice"></td>
                <td>Beaf steak <p>Far far away, behind the word mountains</p></td>
                <td>$ 17.50</td>
            </tr>
            <tr>
                <td><img src="../../images/res_img_1.jpg" alt="juice"></td>
                <td>Pineapple juice <p>Far far away, behind the word mountains</p></td>
                <td>$ 17.50</td>
                <td><img src="../../images/res_img_2.jpg" alt="juice"></td>
                <td>Beaf steak <p>Far far away, behind the word mountains</p></td>
                <td>$ 17.50</td>
            </tr>
            </tbody>
        </table>
    </section>
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

    .sectionFive{
        margin-top: 5%;

    }
    .head{
        text-align: center;
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
        width:100%;
    }
    table th{

        font-size: 22px;
        font-family: 'Spectral', serif;
    }
    table tr{
     padding: 30%;
    }
    table tr td>img{
    width: 80px;
        border-radius: 10px;
}
    table tbody tr>td{
        padding: 2% 0;
        border-bottom: 1px dotted gray;
    }
</style>