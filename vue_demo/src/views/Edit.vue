<template>
  <div class="m-space">
    <div style="margin-bottom: 10px">
      <Navbar />
    </div>
    <div class="upload">
      <van-uploader
        class="uploadFile"
        :after-read="afterRead"
        preview-size:100vw
      />
      <Editbanner left="头像">
        <img slot="right" :src="model.user_img" alt="" v-if="model.user_img" />
        <img src="../image/article_img1.jpg" alt="" slot="right" v-else />
      </Editbanner>
    </div>
    <Editbanner left="呢称" @bannerClick="show = true">
      <a href="javascript:;" slot="right">{{ model.name }}</a>
    </Editbanner>
    <Editbanner left="UID">
      <a href="javascript:;" slot="right">{{ model.username }}</a>
    </Editbanner>
    <Editbanner left="性别" @bannerClick="sexShow = true">
      <a href="javascript:;" slot="right">{{ model.gender==1? '男':'女'}}</a>
    </Editbanner>
    
    <Editbanner left="个性签名" @bannerClick="textShow = true">
      <a href="javascript:;" slot="right">{{ model.user_desc }}</a>
    </Editbanner>
    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="comfirmClick"
      @cancel="content = ' '"
    >
      <van-field v-model="content" placeholder="请输入用户名" autofocus />
    </van-dialog>
    <van-dialog
      v-model="textShow"
      title="个性签名"
      show-cancel-button
      vantdelo
      @confirm="textareaClick"  
      @cancel="content = ' '"
    >
      <van-field
        v-model="content"
        type="textarea"
        placeholder="请输入个性签名"
        autofocus
      />
    </van-dialog>
    <van-action-sheet v-model="sexShow" :actions="actions" @select="onSelect" cancel-text ="取消"/>
    <div class="op_card">
      <a href="javascript:;" @click="$router.back()">返回空间</a>
      <a href="javascript:;" @click = "$router.push('/login')">退出登录</a>

    </div>
    <!-- 组件自带属性 -->
  </div>
</template>

<script>
import Navbar from "../components/common/Navbar";
import Editbanner from "../components/common/Editbanner";
export default {
  data() {
    return {
      model: {},
      show: false,
      content: "",
      textShow: false,
      sexShow:false,
      actions: [{ name: '男' ,val:'1'}, { name: '女',val:'0' }], //通过val 来判断男女
    };
  },
  components: {
    Navbar,
    Editbanner,
  },
  methods: {
    async selectuser() {
      const res = await this.$http.get(
        "/user/" + localStorage.getItem("id"),
        
      )
      
      this.model = res.data[0];
    },
    /***vant 组件的文件上传功能 */
    async afterRead(file) {
      //创建一个FormData的实例
      const fromdata = new FormData();
      //追加到file(后端给的)
      fromdata.append("file", file.file);
      //发送请求更改数据 存进一个地方
      const res = await this.$http.post("./upload", fromdata);
      // 用上传的文件去替换已有的文件
      this.model.user_img = res.data.url;
      UserUpdate(); //避免刷新文件丢失
    },
    async UserUpdate() {
      //后端写好/update/      把后台数据更换用本地存储的数据
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
      if(res.data.code == 200){
          this.$msg.fail('修改成功') //判断状态码是否为200
      }
    },
    comfirmClick() {
      this.model.name = this.content;
      this.UserUpdate();
      this.content = "";
      console.log(22)
    },
    textareaClick(){
         this.model.user_desc = this.content;
      this.UserUpdate();
          this.content = "";
    },
    onSelect(data){
        console.log(data)
        this.model.gender = data.val
        this.UserUpdate()
        this.sexShow = false
    }
  },

  created() {
    this.selectuser();
  },
};
</script>

<style lang='less'>
.m-space a{
  color: #999;
}
.upload {
  position: relative;
  overflow: hidden;

  .uploadFile {
    width: 100%;
    position: absolute;
    opacity: 0;
  }
  .van-uploader__wrapper {
    width: 100%;
  }
  .van-uploader__upload {
    width: 100%;
  }
}
.op_card{
  margin-top: 5.33333vw;
  a{
    display: block;
    padding: 2.66667vw;
    text-align: center;
    color: #505050;
    text-decoration: none;
    background: #fff;
    font-size: 3.73333vw;
  }
  a:first-child{
    border-bottom: 1px solid #eee;

  }
}
</style>