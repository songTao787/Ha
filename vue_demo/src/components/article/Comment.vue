<template>
  <div class="list" style="background:white;">
      <ul>
          <li class="common_item">
              <div class="common_item_app">
                  <div class="head">
                      <img :src="userinfo.user_img" alt="" v-if="userinfo.user_img">
                      <img src="../../image/article_img1.jpg" alt="" v-else>
                      <input type="text" placeholder="说点什么吧" v-model="commentContent" ref="Postinput">
                      <button class="comment_btn"  @click="commentPublish">发表</button>
                  </div>
                  <div class="detail">
                      <div class="user">
                          <span class="like">
                              <span class="comment_num">评论{{datelength}}</span>
                          </span>
                      </div>
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userinfo:{},
            commentContent:''
        }
    },
    props:['datelength'],
    methods:{
        async myuserInfo(){
            const res = await this.$http.get('/user/' + localStorage.getItem('id'))
            this.userinfo = res.data[0]
        },
        commentPublish(){   
            if(!(this.userinfo) && !localStorage.getItem('token') && !localStorage.getItem('id')){
                this.$msg.fail('请先登录')
                return  
            }
            this.$emit('Postcomment',this.commentContent)
            this.commentContent = ''
        },
        focuss(){
            this.$refs.Postinput.focus()
        }
    },
    created(){
        // if(localStorage.getItem('token')){
            this.myuserInfo()
        // }
    }
}
</script>

<style lang = 'less'>

.list>ul>.common_item{

    clear: both;
    padding: 6vw 3.2vw;
    border-bottom: 1px solid #e7e7e7;
    .common_item_app{
        display: block;
        .head{
            float: left;
            margin-top: 0.53333vw;
            img{
                float: left;
                width: 8vw;
                height: 8vw;
                border-radius: 4vw;
            }
            input{
                outline: none;
                border: 0;
                background: #f4f4f4;
                border-radius: 3.611vw;
                font-size: 3.333vw;
                padding: 2.222vw 10.778vw 2.222vw 4.167vw;
                margin-left: 2.778vw;
            }
            .comment_btn{
                background: #fb7299;
                color: white;
                font-size: 3.333vw;
                padding: 1.389vw 1.944vw;
                border-radius: 1.389vw;
                border: 0;
                outline: none;
            }
        }
        .detail{
            overflow: hidden;
                margin-left: 12vw;
                .user{
                    .name{
                        font-size: 3.46667vw;
                        color: #757575;
                    }
                    .like{
                        float: right;
                        font-size: 2.66667vw;
                        color: #999;
                        margin-top: 2.86667vw;
                        img{
                            height: 3.66667vw;
                            width: 3.66667vw;
                            color: #999;
                            margin-right: 1vw;
                        }
                        i{
                            vertical-align: middle;
                        }
                        .comment_num{
                            float: right;
                        }
                    }
                    .comment_date{
                        margin-top: 1.86667vw;
                        font-size: 3.2vw;
                        height: 3.2vw;
                        line-height: 3.2vw;
                        color: #999;
                    }
                    .comment_content{
                        margin-top: 2.4vw;
                        font-size: 3.46667vw;
                        color: #212121;
                        white-space: pre-line;
                        word-break: break-word;  
                    }
                }
            }
            
    }
}
</style>