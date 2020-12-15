<template>
  <div>
    <div class="eliminate_footer">
        <label>
        <input type="checkbox" v-model="isCheckAll" />
      </label>
      <span>已完成{{ reducenum }}/全部{{ total }}</span>
      <button class="eliminate_btn" @click="deleteItems" v-show="reducenum">清除已完成任务</button> 
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['total','reducenum']),
    isCheckAll:{
      get(){
        return this.$store.getters.isCheckAll
      },
      set(value){
        this.$store.dispatch('seclectAll',value)
      }
    }
  },
  methods:{
    deleteItems(){
      if(window.confirm('确定要删除吗？')){
        this.$store.dispatch('deltetChecked')
      }
    }
  }
};
</script>

<style>
.eliminate_btn {
  float: right;
  background-color: red;
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 5px;
}
.eliminate_footer {
  margin: 20px;
}
</style>