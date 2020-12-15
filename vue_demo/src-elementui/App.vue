<template>
<div>
  <el-carousel height="200px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="(list,index) in date" :key="index">
      <h3 class="medium">{{list.name}}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>
<script>
export default {
	data(){
		return{
			date:[{name:'宋涛',age:'18'},
			{name:'宋涛1',age:'18'},
			{name:'宋涛2',age:'18'},
			{name:'宋涛3',age:'18'}]
		}
	}
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: red;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: yellow;
  }
</style>