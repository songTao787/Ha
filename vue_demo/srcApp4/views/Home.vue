<template>
  <div>
      <h2>Home组件</h2>
      <router-link to="/home/news">news</router-link>
      <router-link to="/home/messages">message</router-link>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>