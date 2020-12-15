<template>
    <div class="eliminate_checkbox">
      <ul>
        <items v-for="(item,index) in usernamelist" :key="index" :item = 'item' :index = 'index' ></items>
      </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import items from "./item";
import storage from '../utils/storageUtils'
export default {
  computed:{
     ...mapState(['usernamelist']),
  },
  components: {items},
  watch:{
    usernamelist:{
      deep :true, //是否深度监测
      handler : storage.saveTodos //每次改变都会执行的方法
    }
  }
};
</script>

<style>
.eliminate_checkbox {
  margin: 20px;
  border: 1px solid #999;
}
.eliminate_checkbox input {
  margin: 20px 5px;
}
</style>