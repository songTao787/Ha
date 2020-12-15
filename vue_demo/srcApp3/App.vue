<template>
  <div class="body">
    <searchHead></searchHead>
    <searchList></searchList>
  </div>
</template>

<script>
import searchHead from "./components/Search_head";
import searchList from "./components/Search_list";

export default {
  name: "App",
  components: {
    searchHead,
    searchList
  },
  
};
</script>

<style>

</style>
