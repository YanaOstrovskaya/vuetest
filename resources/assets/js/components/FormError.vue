<template>
    <span class="error">{{error}}</span>
</template>
<script>
    export default {
        props:['error'],
        computed:{
            err(){
                if(this.error){
                    let str = String(this.error);
                    return str;
                }
            }
        }
    }
</script>
<style>
    .error{
        color:red;
        font-size: 16px;
    }
</style>