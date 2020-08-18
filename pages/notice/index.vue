<template>
  <b-container>
    <div v-html>{{name}}</div>
  </b-container>
</template>

<script>
  export default {
    data(){
      return {
        name:'',
        describe:'table',
        pageSize:50,
        pageNo:1
      }
    },
    /* async asyncData(context){
      return context.app.$request.getNotice({'describe': 'table','pageSize': 50,'pageNo': 1}).then(res=>{
         console.log(res.result.resultList,22)
        return {
          name: res.result.resultList,
        }
        console.log(res)
      })
    } */
  }
</script>

<style>
</style>
