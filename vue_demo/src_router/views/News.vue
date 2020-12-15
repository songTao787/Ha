<template>
  <ul>
      <li v-for="(new1,index) in news" :key = 'index'>{{new1}}</li>
  </ul>
</template>

<script>
export default {
    name:'News',
    data(){
        return{
            news:['new01','news02','news03']
        }
    }
}
</script>

<style>

</style>