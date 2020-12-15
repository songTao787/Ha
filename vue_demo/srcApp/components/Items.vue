<template>
<div>
  <li class="list">
   <div class="items">{{item.name}}</div><span>说</span>
  <div class="contain">{{item.content}}</div>
  <button class="del" @click="dele">删除</button>
   </li>
</div>
</template>

<script>

export default {
  name: 'items',
  props:{
    item:Object,
    del:Function,
    index:Number
  },
  methods:{
    dele(){
      const index = this.index
      this.del(index)
    }
  }
}
</script>

<style>
p{
    text-indent: 2em;
}
.items{
    display: inline-block;
    font-size: 16px;
}
.del{
  width: 30px;
  height: 20px;
  background: lightseagreen;
  border: none;
  float: right;
}
</style>