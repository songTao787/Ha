<template>
  <div>
    <LoginTop middleTop = '登录bilibili'>
     <div slot="right" @click="$router.push('./register')" style="font-size:0.5rem">切换到注册</div>
    </LoginTop>
    <LoginText label = '账号' placeholder = "请输入账号" role = "^.{6,16}$" @inputChange = "res => model.username = res"  style="margin: 10px 0"/>
    <LoginText label = '密码' type="password"  placeholder = "请输入密码" role = "^.{6,16}$" @inputChange = "res => model.password = res"/>
    <LoginBtn btntext="登录" @registerSubmit = "registerSubmit"/>
  </div>
</template>

<script>

import LoginTop from '../components/common/LoginTop.vue'
import LoginText from '../components/common/LoginText.vue'
import LoginBtn from '../components/common/LoginBtn.vue'

export default {
  data(){
    return{
      model:{
      username:'',
      password:''
      }

    }
  },
  components:{
    LoginTop,
    LoginText,
    LoginBtn
  },
  methods:{
    async registerSubmit(){
      if(this.model.username  && this.model.password  ){
        const res = await this.$http.post('/login',this.model)
          this.$msg.fail(res.data.msg)
          if(res.data.code == 301 || res.data.code ==302){
            return
          }
        
        
        localStorage.setItem('id',res.data.id)
          localStorage.setItem('token',res.data.token)
          setTimeout(() =>{
            this.$router.push('./userInfo')
          },1000)
      }else{
        this.$msg.fail('格式不正确，请重新输入')
      }
    }
  }
 
}
</script>

<style>

</style>