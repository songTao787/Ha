<template>
<div>
   <ul>
        <li v-for="items in messages" :key= "items.id" >
          <router-link :to="'/home/messages/detailitem/'+items.id">{{items.title}}</router-link>
          <button @click="pushShow(items.id)">push查看</button>
          <button @click="replaceShow(items.id)">replace查看</button>
        </li>
  </ul> 
  <button @click="$router.back()">back</button>
  <hr>
  <router-view></router-view>
</div>
  
</template>

<script>
export default {
    name:'Messages',
    data(){
        return{
            messages:[]
        }
    },
    mounted(){
        setTimeout( ()=>{
            const messages = [
                {
                    id:1,
                    title:'message01'
                },
                {
                    id:2,
                    title:'message02'
                },
                {
                    id:3,
                    title:'message03'
                },
                
            ]
            this.messages = messages
        },1000)
    },
    methods:{
        pushShow(id){
            this.$router.push(`/home/messages/detailitem/${id}`)
        },
        replaceShow(id){
            this.$router.replace(`/home/messages/detailitem/${id}`);
        }
    }
}
</script>

<style>

</style>