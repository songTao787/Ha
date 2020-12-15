<template>
<div>
  <!-- 保持状态退出时还可以是原来的模块 -->
  <keep-alive>
    <!-- 利用v-if来判断是否保持活力通过在这个$route.meta.keepalive来判断  现在路由里设置meta的keepalive的值 -->
    <router-view v-if="$route.meta.keepalive"/> 
  </keep-alive>
    <router-view v-if="!$route.meta.keepalive"/>
</div>
  
</template>

<script>
export default {

}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
}

</style>