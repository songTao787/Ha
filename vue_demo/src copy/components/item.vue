<template>
  <div>
    <li @mouseenter = 'change' @mouseleave = "leave" :style="{background:bgcolor}">
    <input type="checkbox"  v-model = "item.state" name = 'likes' :value="index">{{item.name}}
    <button class="right_btn" v-show = 'show' @click ='delItem'>删除</button>
    </li>
</div>
  
</template>
<script>

export default {
  name: "item",
  data(){
    return{
      show : '',
      bgcolor : 'white'
    }
  },
  props:{
      item:Object,
      index:Number,
      
  },
  methods:{
      change(){
        this.bgcolor = 'gray'
        this.show = 'true'
      },
      leave(){
        this.bgcolor = 'white'
        this.show = ''
      },
      delItem(){
       this.$store.dispatch('del',this.index)
      }
  }
};
</script>

<style>

.eliminate_checkbox input {
  margin: 20px 5px;
}
.right_btn{
    background-color: red;
    color: #fff;
    padding: 5px;
    border: none;
    float: right;
}
</style>