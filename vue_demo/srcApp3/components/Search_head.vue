<template>
  <div>
    <div class="search_box">
      <div class="search">
        <p>search Github Users</p>
        <input type="text" placeholder="enter the name you search" v-model="info"/>
        <button @click = "search">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import Axios from 'axios'
export default {
  name: "eliminateFooter",
  data(){
    return{
      info:''
    }
  },
  mounted(){
    
  },
  methods:{
    search(){
      PubSub.publish('searchList',this.info)
      this.info = ''
    }
  }
};
</script>

<style>
.search_box {
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
}
.search {
  padding: 20px 20px 20px 160px;
}
</style>