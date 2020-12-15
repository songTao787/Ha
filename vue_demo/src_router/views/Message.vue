<template>
<div>
   <ul>
        <li v-for="items in messages" :key= "items.id" >
          <router-link :to="'/home/messages/detailitem/'+items.id">{{items.title}}</router-link>
        </li>
  </ul> 
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
    }
}
</script>

<style>

</style>