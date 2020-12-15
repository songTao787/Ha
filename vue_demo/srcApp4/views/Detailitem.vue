<template>
  <div>
    <p>{{id}}</p>
    <ul>
      <li>id:{{datalist.id}}</li>
      <li>title:{{datalist.title}}</li>
      <li>content:{{datalist.content}}</li>
    </ul>
  </div>
</template>

<script>
const datalist = [
                {
                    id:1,
                    title:'message01',
                    content:'message.........1'
                },
                {
                    id:2,
                    title:'message02',
                    content:'message.........2'
                },
                {
                    id:3,
                    title:'message03',
                    content:'message.........3'
                },
]
export default {
  data() {
    return {
      datalist: {},
      id:''
    };
  },
  mounted(){
    this.id = this.$route.params.id * 1
    this.datalist = datalist.find((datalist) => {return this.id === datalist.id})
  },
  watch:{
      $route : function(value){
        this.id = value.params.id * 1
        this.datalist = datalist.find((datalist) => {return this.id === datalist.id}) 
      }
  }
};
</script>

<style>
</style>