<template>
  <div>
      <van-field :label="label" :type="type" :placeholder="placeholder" :role = "role" v-model="content"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content:''
    }
  },
    props:['label','type','placeholder','role'],
    methods:{
      handlerugl(){
        const rue  = new RegExp(this.role)
        if(rue.test(this.content)){
          this.$emit('inputChange',this.content)
        }
      }
    },
    watch:{
      content(){
        this.handlerugl()
      }
    }
}
</script>

<style>

</style>