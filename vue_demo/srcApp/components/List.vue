<template>
<div>
<div class="col-md-7 col-xs-7 col-ms-7 col-sm-7" >
                    <h1>留言</h1>
                    <ul>
                      <item v-for="(item,index) in coments" :key="index" :item = 'item' :del = 'del' :index = 'index'></item>
                    </ul>
                </div>
</div>
</template>

<script>
import item from './Items'
export default {
  name: 'list',
  props:{
    coments:{},
    del:Function
  },
  
 components: {item}
}
</script>

<style>
.list{
    width: 100%;
    height: 60px;
    border: 1px solid #666;
}
</style>
