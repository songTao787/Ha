<template>
  <div style="background:white; overflow: hidden;">
      <Navbar/>
      <img src="../image/bannerTop_new.png" alt="" class="back">
      <div>
          <Userdetail :userInfo="model"/>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar'
import Userdetail from '../components/userCompont/Userdetail'
export default {
    data(){
        return{
            model:{}
        }
    },
    components:{
        Navbar,
        Userdetail
    },
    methods:{
        async USerinfoDate(){
            const res = await this.$http.get('/user/'+ localStorage.getItem('id'),{
               
            })
            this.model = res.data[0]
        }
    },
    created(){
        this.USerinfoDate();
    }
}
</script>

<style lang = 'less'>
.back{
    width: 100vw;
    height: 24vw;
    overflow: hidden;
    
    background-size: cover;
    background-position: 50%;
}
</style>