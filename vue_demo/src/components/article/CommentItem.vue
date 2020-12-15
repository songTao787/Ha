<template>
  <div class="open-app-btn">
      <div class="m-sub-reply-preview" v-for="(item,index) in CommentChild" :key="index">
          <div class="comment-app">
            <div class="head">
              <img :src="item.userinfo.user_img" alt="" v-if="item.userinfo.user_img"/>
              <img src="../../image/article_img1.jpg" alt="" v-else/>
            </div>
            <div class="detail">
              <div class="user">
                <span class="name">{{item.userinfo.name}}</span>
              </div>
              <p class="time">{{item.comment_date}}</p>
              <p v-if="!temp" class="content">回复<span class="color">{{item.parent_user_info.name}} </span>：{{item.comment_content}} <span class="publishd" @click="Postitemcomment(item.comment_id)">回复</span> </p>
              <p v-else class="content">{{item.comment_content}} <span class="publishd" >回复</span></p>
            </div>
          </div>
         
             <CommentChilditem :CommentChild = "item.child" :temp="true" @postChild = "postChild"></CommentChilditem> 
         
            
      </div>
  </div>
</template>

<script>
export default {
    name:'CommentChilditem',
    props:['CommentChild','temp'],
    methods:{
      Postitemcomment(id){
       this.$emit('postChild',id)
       this.$emit('PostPublish',id)
      },
      postChild(id){
        this.Postitemcomment(id)
        this.$emit('PostPublish',id)
      }
    }
}
</script>

<style lang = 'less'>
.open-app-btn{
    position: relative;
    .m-sub-reply-preview{
        display: flex;
        flex-direction: column;
        background: #f4f4f4;    
        border-radius: 1.06667vw;
        .color{
            color: #5090cc;
        }
    }
}
.publishd{
    float: right;
    margin-right: 3vw;
    color: red;
  }
</style>