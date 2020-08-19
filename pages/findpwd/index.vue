<template>
    <section>
        <forget-phone v-if="currentStatus=='tophone'"  @on-result-change="onResultChange"></forget-phone>
        <forget-email v-else  @on-result-change="onResultChange"></forget-email>
    </section>
</template>

<script>
    import forgetEmail from '@/components/forgetpwd/email.vue';
    import forgetPhone from '@/components/forgetpwd/phone.vue';
    export default{
        layout: 'loginRegister',
        components:{
            forgetEmail,
            forgetPhone
        },
        data(){
            return {
                currentStatus:'tophone'
            }
        },
        methods:{
            onResultChange(val){
                console.log(val)
                this.currentStatus = val;
            },
            goback(){
                this.$router.push({path:'/'})
            }
        }

    }
</script>

<style scoped="scoped">
    section{
        height: 100%;
        position: relative;
    }
    .back{
        font-size: 40px;
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
    }
    /deep/ #nb_icon_wrap{
        display: none;
    }
</style>
