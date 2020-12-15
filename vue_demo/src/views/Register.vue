<template>
  <div>
    <LoginTop middleTop = '注册bilibili'>
      <div slot="right" @click="$router.push('./login')" style="font-size:0.5rem">切换到登录</div>
    </LoginTop>
    <LoginText label = '姓名' style="margin: 10px 0" placeholder = "请输入姓名" role = "^.{6,16}$" @inputChange = "res => model.name = res"/>
    <LoginText label = '账号' placeholder = "请输入账号" role = "^.{6,16}$" @inputChange = "res => model.username = res"/>
    <LoginText label = '密码' type="password"  placeholder = "请输入密码" role = "^.{6,16}$" @inputChange = "res => model.password = res"/>
    <LoginBtn btntext="注册" @registerSubmit = "registerSubmit"/>
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
        name:'',
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
      let rulg = /^.{6,16}$/
      if(rulg.test(this.model.name ) && rulg.test(this.model.username)   && rulg.test(this.model.password)  ){
        const res = await this.$http.post('/register',this.model).then(res =>{
          this.$msg.fail(res.data.msg)
          console.log(res)
          localStorage.setItem('id',res.data.id)
          localStorage.setItem('token',res.data.objtoken)
          setTimeout(() =>{
            this.$router.push('./userInfo')
          },1000)
        })
      }else{
        this.$msg.fail('格式不正确，请重新输入')
      }
    }
  }
 
}
</script>

<style>

</style>