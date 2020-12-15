<template>
    <div class="btnparent" @click="registerClick">
      <div class="loginbtn">{{btntext}}</div>
    </div>
</template>

<script>
export default {
    props:['btntext'],
    methods:{
        registerClick(){
            this.$emit('registerSubmit')
        }
    }
}
</script>

<style>
.btnparent{
    padding: 1rem 0.5rem;
}
.loginbtn{
    height: 45px;
    background: #ff9db5;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.375rem;
    font-size: 1rem;
}
</style>