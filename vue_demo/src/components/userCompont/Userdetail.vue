<template>
  <div style="overflow: hidden">
    <div class="userdetail">
      <div class="user_img">
        <img :src="userInfo.user_img" alt="" v-if="userInfo.user_img"/>
        <img src="../../image/article_img1.jpg" alt="" v-else/>
        
      </div>
      <div class="relation">
        <div class="count">
          <span class="fans">
            <span class="num">--</span>
            <br />
            <span class="type">粉丝</span>
          </span>
          <span class="split"></span>
          <span class="fllow">
            <span class="num">1</span>
            <br />
            <span class="type">关注</span>
          </span>
          <span class="split"></span>
          <span class="likes">
            <span class="num">--</span>
            <br />
            <span class="type">获赞</span>
          </span>
        </div>
        <div class="fllow_btn">
          <button class="white" @click="$router.push('/edit')">编辑资料</button>
        </div>
      </div>
    </div>
    <div class="part1">
      <div class="base">
        <span class="name">{{userInfo.name}}</span>
      </div>
      <div class="desc">
        <span class="content" v-if="userInfo.user_desc">{{userInfo.user_desc}}</span>
        <span class="content" v-else>这个人很神秘，什么都没有写</span>
      </div>
    </div>
    <van-tabs type="card" class="tabs">
      <van-tab title="动态">
        <div class="list">
          到达动态的尽头惹～
          <div class="footer">
            <p>信息网络传播视听节目许可证：0910417</p>
            <p>信息网络传播视听节目许可证：0910417</p>
            <p>信息网络传播视听节目许可证：0910417</p>
            <p>信息网络传播视听节目许可证：0910417</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="视频">
        <div class="archive-list">
          <div class="archive-wrap">
            <img src="../../image/noContent.png" alt="" />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  props:['userInfo']
};
</script>

<style lang = "less">
.userdetail {
  padding: 0 3.2vw;
  background-color: white;
  overflow: hidden;
  .user_img {
    float: left;
    position: relative;
    width: 22.4vw;
    height: 22.4vw;
  }
  .user_img img {
    position: absolute;
    z-index: 2;
    width: 22.4vw;
    height: 22.4vw;
    border-radius: 11.2vw;
    margin-top: -1.6vw;
  }
  .relation {
    float: right;
    width: 58.66667vw;
    padding-top: 2.13333vw;
    color: #e7e7e7;
    span {
      width: 16.2vw;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      line-height: 10px;
    }
    .count .num {
      font-size: 3.73333vw;
      color: #212121;
      line-height: 4.26667vw;
    }
    .count .type {
      font-size: 2.93333vw;
      color: #999;
    }
    .split {
      display: inline-block;
      vertical-align: middle;
      width: 1px;
      height: 4.26667vw;
      background: #e7e7e7;
    }
    .fllow_btn {
      display: block;
      .white {
        background: #fff;
        border: 1px solid #fb7299;
        color: #fb7299;
      }
      button {
        width: 100%;
        display: block;
        height: 8vw;
        border: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 1.06667vw;
        font-size: 3.73333vw;
        margin-top: 3.2vw;
        outline: none;
      }
    }
  }
}
.part1 {
  clear: both;
  padding: 3.2vw;
  .base {
    .name {
      font-size: 4.8vw;
      color: #212121;
      max-width: 62.66667vw;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
    }
  }
  .desc {
    overflow: hidden;
    .content {
      margin-top: 2.13333vw;
      font-size: 3.46667vw;
      color: #999;
      line-height: 4.53333vw;
      width: 83.46667vw;
      height: 4.53333vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      float: left;
    }
  }
}

.tabs {
  overflow: hidden;
  line-height: 10.66667vw;
  padding-left: 3.2vw;
  background: #fff;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  font-size: 0;
  .van-tabs__nav--card {
    display: inline-block;
    margin-right: 8.53333vw;
    color: #757575;
    font-size: 3.46667vw;
  }
  .van-tab {
    float: left;
  }
  .van-tabs__nav--card .van-tab {
    border-right: none;
    color: #666;
  }
  .van-tabs__nav--card {
    margin: 10px 0;
    border: none;
  }
  .van-tabs__nav--card .van-tab.van-tab--active {
    background: none;
  }
  .van-tabs__nav--card .van-tab.van-tab--active {
    color: #fb7299;
  }
  .list {
    padding: 0;
    text-align: center;
    font-size: 13px;
    line-height: 40px;
    color: #757575;
    .footer {
      text-align: center;
      padding: 26vw 1.33333vw;
      p {
        color: #999;
        font-size: 3.2vw;
        line-height: 6.4vw;
      }
    }
  }
  .archive-list {
    padding-left: 3.2vw;
    background: #fff;
    .archive-wrap {
      padding: 30.66667vw 0 4.26667vw;
      text-align: center;
    }
    img {
      width: 74.66667vw;
      margin-bottom: 4vw;
    }
  }
}
</style>