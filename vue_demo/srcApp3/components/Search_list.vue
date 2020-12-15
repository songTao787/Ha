<template>
  <div>
    <div class="search_content">
      <h1 v-show= 'username'>请输入关键字搜索</h1>
      <h1 v-show= 'state'>请稍等</h1>
      <!-- <h1 v-if= "!info.imgurl" >请输入关键字搜索</h1>
      <h1 v-if= "info.imgurl" >请稍等</h1> -->
      <ul>
        <li class="items" v-for="(item,index) in info" :key='index'>
          <a href="#">
            <img v-bind:src="item.imgurl" alt="" />
            <p>{{item.username}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import Axios from 'axios'
export default {
  name: "eliminateList",
  data(){
    return{
      info:[],
      username:true,
      state:false
    }
  },
  mounted(){ 
    PubSub.subscribe('searchList',(msg,info) =>{
      this.searchList(info)
    })
  },
  methods:{
    
      searchList(info){
        this.info = []
        this.state = true
        this.username = false
        let url = 'https://api.github.com/search/users?q='+info+''
    Axios.get(url).then(
      
      response => {
        this.state = false
        let result = response.data;
        let mostRopo = result.items
        for(var i=0;i<mostRopo.length;i++){
        let imgurl = mostRopo[i].avatar_url;
        let username = mostRopo[i].login;
        let arr = {imgurl:imgurl,username:username}
        this.info.push(arr)
        }
       
      }).catch(error=>{
        alert('失败')
      })
    }
  }
    

};
</script>

<style>
.search_content {
  width: 1200px;
  margin: 0 auto;
}
.search_content ul{
  margin-top: 30px;
}
.items {
  width: 33.33%;
  float: left;
  text-align: center;
  list-style: none;
}
.items img {
  display: block;
  width: 200px;
  height: 100px;
  margin: 0 auto;
}
.items a {
  color: black;
  text-decoration: none;
}
</style>