<template>
  <div>
    <div class="commentParent">
      <ul>
        <li class="comment-item" v-for="(item,index) in CommenList" :key = 'index'>
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
              <p class="content">{{item.comment_content}} <span class="publish" @click = "Publishclick(item.comment_id)">回复</span></p>
            </div>
          </div>
          <div class="padding">
            <CommentItem :CommentChild ="item.child"  @postChild = "Publishclick"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CommentItem from './CommentItem'
export default {
  data() {
    return {
      CommenList: null,
    };
  },
  components:{
    CommentItem
  },
  methods: {
    async commentDate() {
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      if(res.data){
        this.$emit('comentLength',res.data.length)
      }
      
      this.CommenList = this.changeCommentDate(res.data);
    },
    changeCommentDate(data) {
      function fn(temp) {
        //
        let arr1 = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id == temp) {
            arr1.push(data[i]);
            data[i].child = fn(data[i].comment_id); //利用递归自己调用自己每次更新参数
          }
        }
        return arr1;
      }
      return fn(null);
    },
    Publishclick(id){
      this.$emit('Publishclick',id)
    },
   
  },
  created() {
    this.commentDate();
  },
};
</script>

<style lang = 'less'>
.commentParent {
  background: white;
  .comment-item {
    clear: both;
    padding: 3.2vw;
    border-bottom: 1px solid #e7e7e7;
    .comment-app{
      margin-bottom: 3vw;
    }
    .head {
      float: left;
      margin-top: 0.53333vw;
      img {
        float: left;
        width: 8vw;
        height: 8vw;
        border-radius: 4vw;
      }
    }
    .detail {
      margin-left: 12vw;
      .user {
        .name {
          font-size: 3.46667vw;
          color: #757575;
        }
      }
      .time {
        margin-top: 1.86667vw;
        font-size: 3.2vw;
        height: 3.2vw;
        line-height: 3.2vw;
        color: #999;
      }
      .content {
        margin-top: 2.4vw;
        font-size: 3.46667vw;
        color: #212121;
        white-space: pre-line;
        word-break: break-word;
      }
    }
  }
  .padding{
    padding: 0 vw;
    .open-app-btn .m-sub-reply-preview .comment-app .detail .user .name{
      color: black;
    }
  }
  .publish{
    float: right;
    color: red;
  }
}
</style>