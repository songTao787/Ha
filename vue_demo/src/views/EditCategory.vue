<template>
  <div>
    <Navbar />
    <van-divider
      :style="{ color: '#fb7299', borderColor: '#1989fa', padding: '0 16px' }"
    >
      现有栏目
    </van-divider>
    <div class="fir">
        <p @click="handlecategory(index)" v-for="(item,index) in Newcat" :key="index">{{item.title}}</p>
        
        
    </div>
    <van-divider
      :style="{ color: '#5090cc', borderColor: '#1989fa', padding: '0 16px' }"
    >
      已删除栏目
    </van-divider>
    <div class="sec">
        <p @click="dellecategory(index)" v-for="(item,index) in Delcat" :key="index">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/common/Navbar.vue";
export default {
    data(){
        return{
            Newcat:[],
            Delcat:[]
        }
    },
  components: {
    Navbar,
  },
  methods:{
      async SelectCategory(){
        const res = await this.$http.get('/category')
        this.Newcat = res.data
      },
      handlecategory(index){
          
           this.Delcat.push(this.Newcat[index])  //加入点击的
          this.Newcat.splice(index,1)  //点击删除
          
      },
      dellecategory(index){
           this.Newcat.push(this.Delcat[index])  //加入点击的
          this.Delcat.splice(index,1)  //点击删除
      }
  },
  watch:{
      Newcat(){
        localStorage.setItem('Newcat',JSON.stringify(this.Newcat))
        localStorage.setItem('Delcat',JSON.stringify(this.Delcat))
      }
  },
  created(){
      if(localStorage.getItem('Newcat') && localStorage.getItem('Delcat')){
          this.Newcat = JSON.parse(localStorage.getItem('Newcat'))
          this.Delcat = JSON.parse(localStorage.getItem('Delcat'))
          return
      }
      this.SelectCategory()
  }
};
</script>

<style>
.fir,.sec{
    width: 90%;
    margin: 0 auto;
    display: flex;
    margin: 0 2.778vw;
    flex-wrap:wrap;

}
.fir p{
    margin: 2.778vw;
    font-size: 5.556vw;
    padding: 1.389vw;
    border: 1px solid #fb7299;
    color: #fb7299;
}
.sec p{
     margin: 2.778vw;
    font-size: 5.556vw;
    padding: 1.389vw;
    border: 1px solid #1989fa;
    color: #1989fa;
}

</style>