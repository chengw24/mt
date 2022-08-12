<template id="my">
  <main>
    <div style="background: rgb(240, 240, 240); height: 100vh;">
      <router-view>
      </router-view>
      <div class="header">
        <div class="my_header">
          <div class="tx">
            <img src="../../public/img/tx.png" alt="">
          </div>
          <p>小🦌来辣</p>
        </div>
      </div>
      <div class="main">
        <ul class="asd">
          <li class="list1" v-for="(it,index) in list">
            <div class="ss">
              <img class="pic-1" :src="it.src" alt="">
              <p>{{it.t1}}</p>
            </div>
            <img class="pic-2" src="../../public/icon-img/ri.png" alt="">
          </li>
        </ul>
        <div class="kf">
          <p>客服电话：10010010010</p>
        </div>
        <div class="sj">
          <p class="is">服务时间：9:00-23:00</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
  * {
    margin: 0;
    padding: 0;

  }
</style>
<style scoped>
  .tx {
    margin-top: 20vw;
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    border: 4px solid #ffe699;
    margin: auto;
  }

  .tx img {
    width: 20vw;
  }

  .header p {
    width: 100%;
    text-align: center;
    font-size: 16px;
    margin-top: 8px;
    cursor: pointer;
    color: #333333;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .lg {
    margin-top: 2vw;
    font-size: 16px;
    font-weight: 700;
    margin-left: 2.5%;
    width: 95%;
    height: 10vw;
    border: 0;
    border-radius: 4px;
    background: #49c752;
    color: #fff;

  }



  .header {
    padding: 10% 0 5%;
    width: 100vw;
    background: url(../../public/img/myba.png);
    color: #333;
    background-size: 100% 100%;
    font-size: 4.8vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .asd {
    background: #fff;

  }

  .list1 {
    width: 97%;
    margin-left: 3%;
    padding: 10px 0;
    border-bottom: 1px solid #e3e3e3;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .ss {
    display: flex;
  }

  .list1 p {
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }

  .pic-1 {
    width: 4vw;
    height: 4vw;
    padding-top: 0.8vw;
    margin-right: 3vw;
  }

  .pic-2 {
    width: 4vw;
    height: 4vw;
    padding-top: 0.8vw;
    margin-right: 4vw;
  }

  .kf {
    width: 100vw;
    margin-top: 5vw;
    background: #fff;
    cursor: pointer;
  }

  .kf p {
    font-size: 3.8vw;
    line-height: 10vw;
    color: #ffb000;
    text-align: center;
  }

  .sj {
    padding: 2vw 0;
    text-align: center;
    font-size: 3vw;
    color: #999999;
  }
</style>

<script>
  export default {
    data () {
      return {
        list: [
          {
            src: 'img/my01.png',
            t1: '美 团 红 包'
          },
          {
            src: 'img/my02.png',
            t1: '收 货 地 址'
          },
          {
            src: 'img/my03.png',
            t1: '我 的 收 藏'
          },
          {
            src: 'img/my04.png',
            t1: '极 速 支 付'
          },
          {
            src: 'img/my05.png',
            t1: '常 见 问 题'
          },
          {
            src: 'img/my06.png',
            t1: '美 团 协 议 及 说 明'
          },
          {
            src: 'img/my07.png',
            t1: '退 出 登 录'
          },
        ]
      }
    }
  }
</script>