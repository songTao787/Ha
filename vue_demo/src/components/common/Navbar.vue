<template>
  <div class="navbar">
    <div class="logo">
      <img src="../../image/bilili.png" alt="" @click="$router.push('/')"/>
    </div>
    <div></div>
    <div class="">
      <van-icon name="search" class="search_icon" />
      <img :src="imgUrl" alt="" @click="$router.push('/edit')" v-if="imgUrl"/>
      <img src="../../image/article_img1.jpg" @click="$router.push('/login')" alt="" v-else />
      <button>下载 App</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  async mounted() {
    if(localStorage.getItem('token')){
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.imgUrl = res.data[0].user_img;
    }
    
  },
  
};
</script>

<style lang='less'>
.navbar {
  height: 11.73333vw;
  line-height: 11.73333vw;
  padding: 0 3.2vw 0 4.8vw;
  font-size: 0;
  background: #fff;
  display: flex;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16vw;
    img {
      width: 100%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
  }

  div:nth-child(3) {
    vertical-align: top;
    display: flex;
    justify-content: center;
    align-items: center;
    .search_icon {
      margin-right: 1.86667vw;
      width: 5.86667vw;
      height: 5.86667vw;
      display: inline-block;
      color: #ccc;
      font-size: 5.86667vw;
      color: #ccc;
    }
    img {
      width: 6.4vw;
      height: 6.4vw;
      border-radius: 50%;
      margin: 0 3.2vw;
    }
    button {
      margin-left: 2.13333vw;
      width: 21.86667vw;
      height: 6.4vw;

      background: #fb7299;
      border: none;
      border-radius: 1.06667vw;
      color: #fff;
      font-size: 3.46667vw;
      vertical-align: top;
      line-height: 2;
    }
  }
}
</style>