<template>
  <div v-if="model">
    <Navbar/>
    <div class="player_wrap">
      <div class="player_img">
        <img src="../image/vedio.jpg" alt="">
        <i class="player_btn"></i>
      </div>
      <div class="article_text">
        <div class="article_text_head">
          <span class="article_type">{{model.category.title}}</span>
          <h1 class="article_title">{{model.name}}</h1>
        </div>
        <div class="user_date">
          <span class="up">{{model.userinfo.name}}</span>
          <span class="view">64.1万观看</span>
          <span>2815弹幕</span>
          <span>{{model.date}}</span>
        </div>
      </div>
      <div class="article_tool">
        <div class="left">
          <div class="app_btn">
            <i @click="handle">
              <img src="../image/hand.png" alt=""  v-if="hand">
              <img src="../image/handPink.png" alt="" v-else>
            </i>
            <span>点赞</span>
          </div>
          <div class="app_btn">
            <i @click="starClick">
              <img src="../image/star.png" alt="" v-if="star">
              <img src="../image/starPink.png" alt="" v-else>
            </i>
            <span>收藏</span>
          </div>
          <div class="app_btn">
            <i><img src="../image/download.png" alt=""></i>
            <span>缓存</span>
          </div>  
            
        </div>
        <div class="right">
          <div class="app_btn">
            <i><img src="../image/p.png" alt=""></i>
          <span>清晰度</span>
          </div>  
          
        </div>
      </div>
    </div>
    <van-tabs @click="onClick">
  <van-tab title="相关推荐">
    <div class="datailparent">
    <Cover v-for="(item,index) in common" :key ="index" :detailitem = "item"/>
    </div>
  </van-tab>
  <van-tab title="评论">
    <Comment :datelength = "lengh" @Postcomment = "Postsuccess" ref="comment"/>
    <CommentContent @comentLength = "len => lengh =  len" @Publishclick = "PostChildClick" ref="PublishClick"/>
  </van-tab>
</van-tabs>
    
  </div>
</template>

<script>
import Navbar from "../components/common/Navbar.vue"
import Cover from "./Cover"
import Comment from "../components/article/Comment"
import CommentContent from '../components/article/CommentContent'
export default {
  data(){
    return{
      model:null,
      common:null,
      myuser:null,
      lengh:null,
      Postcom:{
        comment_content:'',
        comment_date:'',
        parent_id:null,
        article_id:null
      },
      hand:true,
      star:true
    }
  },
  components: {
      Navbar,
      Cover,
      Comment,
      CommentContent
  },
  methods:{
    //获取文章信息
    async articleitemData(){
      const res = await this.$http.get('/article/' + this.$route.params.id)
      this.model = res.data[0]
    },
    async commonData(){
      const res = await this.$http.get('/commend/')
      this.common = res.data
    },
    //发表评论
    async Postsuccess(res){
      const date = new Date()
      let m = date.getMonth() + 1
      let d = date.getDate()
      if(m<10){
        m = '0'+m
      }
      if(d<0){
        d = '0'+d 
      }
      let str = `${m}-${d}`
      this.Postcom.comment_date = str
      this.Postcom.comment_content = res
      this.Postcom.article_id = this.$route.params.id
      const result = await this.$http.post('/comment_post/' + localStorage.getItem('id'),this.Postcom)
      this.$refs.PublishClick.commentDate()
      this.Postcom.parent_id = null
      if(result.status ==200){
        this.$msg.fail('评论发表成功')
      }
    },
    //简单收藏-点赞
    handle(){
      this.hand = !this.hand
      if(this.hand){
        this.$msg.fail('取消成功')
      }else{
        this.$msg.fail('点赞成功')
      }
      
    },
     starClick(){
      this.star = !this.star
      if(this.star){
        this.$msg.fail('取消成功')
      }else{
        this.$msg.fail('收藏成功')
      }
      
    },
    onClick(){

    },
   PostChildClick(id){
     this.Postcom.parent_id = id
     this.$refs.comment.focuss()
   }
  },
  created(){
    this.articleitemData()
    this.commonData()
  },
  watch:{
    $route(){ //监视每次切换页面都会重新赋值
      this.articleitemData()
      this.commonData() 
    }
  }
}
</script>

<style lang = 'less'>
.player_wrap{
  position: relative;
  background-color: white;
  .player_btn{
    position: absolute;
    display: block;
    bottom: 50%;
    right: 50%;
    width: 54px;
    height: 54px;
    -webkit-transform: translateX(50%) translateY(50%);
    transform: translateX(50%) translateY(50%);
  }
  .player_img{
    width: 100%;
    height: 100%; 
    img{
      position: relative;
    width: 100%;
    height: 100%;
    }
  }
  .article_text{
    margin-top: 4vw;
    padding: 0 3.2vw;
    .article_type{
      position: absolute;
    display: inline-block;
    font-size: 3.2vw;
    padding: 0 1.6vw;
    height: 5.33333vw;
    line-height: 5.33333vw;
    color: #fb7299;
    background: #f4f4f4;
    border-radius: 3.2vw;
    vertical-align: middle;
    margin-top: 0.53333vw;
    }
    .article_title{
    padding-left: 14.66667vw;
    font-size: 4.26667vw;
    font-weight: 400;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 86.66667vw;
    height: 6.4vw;
    line-height: 6.4vw;

    }
  }
}
.article_text_head{
  position: relative;
}
.user_date{
    font-size: 3.2vw;
    margin-top: 2.13333vw;
    color: #999;
    .up{
      margin-right: 4.8vw;
    }
}
.article_tool{
  overflow: hidden;
  padding: 2.93333vw 3.2vw;
  color: #999;
  span{
    font-size: 2.66667vw;
    vertical-align: middle;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  i{
    
    color: #757575;
    vertical-align: middle;
    img{
      width: 5.33333vw;
      height: 5.33333vw;
    }
  }
  .app_btn{
    display: inline-block;
    margin-right: 3.33333vw;
  }
  .app_btn:last-child{
    margin-right: 0;
  }
}
.datailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detailitem {
    width: 45%;
    margin: 10px 0;
  }
}
</style>