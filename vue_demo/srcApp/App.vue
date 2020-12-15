<template>
<div>
<div class="wrap">
        <div class="text"></div>
        <div class="container">
            <div class="row">
                <Add :addComtents = 'addComtents'></Add>
                <List :coments = 'coments' :del = 'del'></List>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import List from './components/List'
import Add from './components/Add'

export default {
  name: 'App',
  data(){
    return {
      coments:[{name : 'Bob' , content : '我是第一个'},
      {name : 'Cat' , content : '我是第二个'},
      {name : 'Alice' , content : '我是第三个'}
      ]
    }
  },
  components: {
    List,
    Add
  },
  methods:{
    addComtents(coments){
      this.coments.unshift(coments)
    },
    del(index){
      this.coments.splice(index,1)
    }
  }
}
</script>

<style>
.wrap{
width: 100%;
height: auto;  
margin-top: 50px;  
}
</style>
