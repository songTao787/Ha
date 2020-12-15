<template>
  <div>
    <div class="eliminate_search">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter ="add" v-model="username"/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      state : 'false'
    }
  },
  methods:{
    add(){
      const username = this.username.trim()
      if(!this.username){
        alert('重新输入')
        return  
      }
      const state = 'false'
      const item = {name:username,state:false}
      this.$store.dispatch('add',item)
      this.username = ''
      this.state = ''
    }
  }
};
</script>

<style>
.eliminate_search {
  width: 500px;
  height: auto;
  margin: 20px;
}
.eliminate_search input {
  width: 100%;
}
</style>
