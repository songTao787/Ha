<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="nav">
      <div class="icon" @click="$router.push('/editcategory')">
        <van-icon name="setting-o" />
      </div>
      
    <van-tabs v-model="active">
      <van-tab
        v-for="(item, index) in category"
        :title="item.title"
        :key="index"
      >
        <div class="datailparent">
          <Cover
            class="detailitem"
            :detailitem="categoryitem"
            v-for="(categoryitem, categoryindex) in item.list"
            :key="categoryindex"
          />
        </div>
        
        <van-list v-model="item.loading" :immediate-check = "false" :finished="item.finished" finished-text="我也是有底线的"  @load="onLoad" >
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        </van-list>
      </van-tab>
      
    </van-tabs></div>
  </div>
</template>

<script>
import Navbar from "../components/common/Navbar.vue"
import Cover from "./Cover";

export default {
  name: "Home",
  data() {
    return {
      category: [],
      active: 0,
    };
  },
  components: {
    Navbar,
    Cover,
  },
  methods: {

    //请求数据回来
    async selectCategory() {
      if(localStorage.getItem('Newcat')){
        let NewCat = JSON.parse(localStorage.getItem('Newcat'))
        this.category = this.changeCategory(NewCat)
        this.selectArticle()
        return
      }
      const res = await this.$http.get("/category");
      this.category = this.changeCategory(res.data); //发送请求回来 并把数据传入另一个方法
      this.selectArticle();
    },
    //改变数据
    changeCategory(data) {
      const category1 = data.map((item, index) => {
        //改变数据
        item.list = [];
        item.page = 0;
        item.finished = false
        item.loading = false
        item.pagesize = 10; //在这个数组中添加一个空数组属性
        return item;
      });
      return category1
      // this.category = category1;
      // this.selectArticle();
    },

    //请求视频数据
    async selectArticle() {
      const categoryitem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        // 添加页数和个数的值和对象
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize,
        },
      });
      /**
       * res.data.forEach(item =>{
       *  categoryitem.list.push(item)
       * })
       */
      categoryitem.list.push(...res.data) //es6的语法sperad扩展运算符
      categoryitem.loading = false
      if(res.data.length < 10){
        categoryitem.finished = true
      }
    },
    //获取到其他active的数据
    categoryItem() {
      const categoryitem = this.category[this.active];
      return categoryitem;
    },
    // 下拉到底执行方法
    onLoad(){
      const categoryitem = this.categoryItem()
      setTimeout(()=>{
        categoryitem.page += 1
      this.selectArticle()
      },1000)
      
    }
  },
  watch: {
    active() {
      this.selectArticle();
    },
  },
  created() {
    this.selectCategory(); //刚进来发送请求
  },
};
</script>

<style lang = 'less'>
.home {
  background: #fff;
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
.van-tab{
  font-size: 3.73333vw;
  
}
.van-tabs__line{
  width: 9.736vw;
  background-color: #fb7299;
  height:.533333vw;
}
.van-tab--active{
    color: #fb7299;
}
.van-tabs__wrap--scrollable .van-tab{
  padding: 0 8.26667vw;
}
.van-tabs__wrap--scrollable .van-tab:first-child{
  padding: 0;
}
.van-tabs__wrap--scrollable .van-tab:nth-child(2){
  padding-left: 16.26667vw ;
}
.van-tabs__wrap--scrollable .van-tab:nth-child(4){
  padding-right: 10.26667vw ;
}
.nav{
  position: relative;
}
.icon{
  position: absolute;
  right: 2.778vw;
  top:2.778vw;
  z-index: 99;
}
</style>