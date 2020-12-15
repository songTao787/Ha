<template>
<!-- //把id传过去article页面  -->
  <div class="detailItem" @click="Pathpush">  
    <div class="imgparent">
      <img :src="detailitem.img" alt="" class="img" />
      <div class="able">
        <span class="video">
          <img src="../image/viedo.png" alt="" />
          11</span
        >

        <span class="comment"><img src="../image/comment.png" alt="" />22</span>
      </div>
    </div>
    <div class="title">{{ detailitem.name }}</div>
  </div>
</template>

<script>
export default {
  props: ["detailitem"],
  methods:{
      Pathpush(){
          if(this.$route.path != `/article/${this.detailitem.id}`){
          this.$router.push(`/article/${this.detailitem.id}`)
          }
      }
  }
};
</script>

<style lang='less'>
.detailItem {
  .title {
    font-size: 3.2vw;
    color: #212121;
    margin-top: 1.6vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .imgparent {
    position: relative;
    background-color: #f3f3f3;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d…UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
    background-size: 36%;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 0.53333vw;
    overflow: hidden;
    position: relative;
    .img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .able {
      width: 93%;
      padding: 1.33333vw 1.6vw;
      font-size: 3.2vw;
      padding: 1.33333vw 1.6vw;
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 0;
      bottom: 0.333vw;
      color: white;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
      img {
        width: 4.167vw;
        height: 4.167vw;
      }
    }
    span {
      display: flex;
      align-items: center;
    }
  }
  .imgparent:before {
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
    content: "";
  }
}
</style>