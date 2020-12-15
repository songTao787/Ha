<template>
  <div class="eliminate_border">
    <Emhead/>
    <List/>
    <Footer/> 
      <!-- //判断reducenum是否有值 有显示否则消失 -->
  </div>
</template>

<script>
import Emhead from "./components/EmHead";
import List from "./components/list";
import Footer from "./components/foot";
import stroage from './utils/storageUtils';
export default {
  components:{
    Emhead,
    List,
    Footer,
  },
  mounted(){
    this.$store.dispatch('req_data',stroage.readTodos())
  }
}
</script>

<style>
.eliminate_border {
  border: 1px solid #666;
}
</style>
