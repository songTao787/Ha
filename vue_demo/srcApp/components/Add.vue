<template>
<div>
<div class="col-md-5 col-xs-5 col-ms-5 col-lg-5">
                    <div class="user">
                        用户名：<br>
                        <input type="text" placeholder="用户名" v-model="username">
                    </div>
                    <div class="contain">
                        评论内容：<br>
                        <textarea name="" id="" cols="30" rows="10" placeholder="评论内容" v-model="content"></textarea>
                    </div>
                    <!-- <div class="btn"> -->
                        <button class="btn" @click = "addComtentss">提交</button>
                    <!-- </div> -->
                </div></div>
</template>

<script>

export default {
  name: 'add',
  data(){
    return{
        username:'',
        content:''
    }
  },
  props:{
    addComtents:Function
  },
  methods:{
    addComtentss(){
      const username = this.username.trim();
      const contents = this.content.trim();
      const comtens = {name:username,content:contents}
      this.addComtents(comtens)
      this.username = '',
      this.content = ''
    }
  }
}
</script>

<style>
.user{
    margin-bottom: 20px;
}
.user input{
    height: 30px;
    width: 100%;
}
.contain textarea{
    width: 100%;
}
.btn{
    width: 50px;
    height: 30px;
    float: right;
    background-color: white;
    border: 1px solid #999;
    outline: none;
    text-align: center;
    margin-top: 10px;
}
</style>
