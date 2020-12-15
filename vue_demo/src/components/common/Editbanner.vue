<template>
  <div class="m-space" @click="bannerClick">
      <div class="m_space_detail">
          
            <span>{{left}}</span>
            <span><slot name="right"></slot></span>
      </div>
  </div>
</template>

<script>

export default {
   props:['left'],
   methods:{
       bannerClick(){
           this.$emit('bannerClick')
       }
   }
}
</script>

<style lang='less'>

    .m_space_detail{
        background: white;
        padding:4.1667vw;
        font-size: 3.889vw;
        color: #333;
        border-bottom: 0.278vw solid #eee;
        display: flex;
        justify-content:space-between;
        img{
            width: 12.26667vw;
    height: 12.26667vw;
    border-radius: 6.13333vw;
    vertical-align: middle;
        }
    }

</style>