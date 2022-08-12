<template id="footer">
  <main>
    <router-view></router-view>
    <van-grid class="wwc" :column-num="3">
      <van-grid-item class="ww" icon="icon-img/index.png" text="首页" to="/wmlist" />
      <van-grid-item icon="icon-img/od.png" text="订单" to="/order" />
      <van-grid-item icon="icon-img/my.png" text="我的" to="/login" />
    </van-grid>
  </main>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
</style>
<style scoped>
  .wwc.van-grid.van-hairline--top {
    position: fixed;
    width: 100vw;
    height: 14vw;
    bottom: 0;
  }
</style>
<style>
  .wwc .van-icon__image {
    display: block;
    width: 5vw;
    height: 5vw;
    object-fit: contain;
  }

  .wwc .van-grid-item__text {
    margin-top: 0px;
  }

  .wwc .van-grid-item__content {
    padding: 10px 8px;
  }

  .wwc .van-grid-item__icon+.van-grid-item__text {
    margin-top: 0px;
    font-size: 1vw;
  }
</style>