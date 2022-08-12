<template id="detail">
  <main>
    <div class="all">
      <div class="mk">
        <div class="bk">
        </div>
        <div class="header-bk">
          <div class="le">
            <img src="../../public/icon-img/back.png" alt="">
          </div>
          <div class="ri">
            <img src="../../public/icon-img/sc.png" alt="">
          </div>
        </div>
        <div class="main-header">
          <div class="main-1">
            <div class="sjlogo">
              <img src="../../public/img/sjlogo.png" alt="">
            </div>
            <div class="tx1">蜜雪冰城（礼村店） </div>
            <div class="tx2">
              <span><img class="star" src="../../public/icon-img/ysc.png" alt=""> 4.5</span>
              <span>配送 约30分钟</span>
            </div>
            <div class="tx3">
              <span>公告：我爱你，你爱我，蜜雪冰城甜蜜蜜！</span>
            </div>
          </div>
        </div>
        <nav class="nav">
          <div class="ad">
            <div class="ad2">点菜</div>
            <div class="ad1">评价</div>
            <div class="ad1">商家</div>
          </div>
          <div class="sreach">
            <img class="ss" src="../../public/icon-img/ss.png" alt="">
            <span>搜索</span>
          </div>
        </nav>
        <div class="main-con">
          <div>
            <div class="con-l">
              <div v-for="(itme2,index) in list" key="index" v-bind:class="{'mkl-cursor':index==num}"
                v-on:click="change2(index)">
                <div class="dk-1">
                  <span>{{itme2.tx}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <dl class="con-r">
              <dt class="mkl2">
                <div class="dk-2"></div>
              </dt>
              <dd class="dd" v-for="(itme,index) in list2" key="index">
                <div class="dd-1">
                  <img class="v1" :src="itme.src" alt="">
                  <img class="vb" src="../../public/img/vb.png" alt="">
                </div>
                <div class="dd-2">
                  <div class="d-d-1">{{itme.t1}}</div>
                  <div class="d-d-2">{{itme.t2}}{{itme.t3}}</div>
                  <div class="d-d-3">{{itme.t4}}</div>
                  <div class="d-d-4">
                    <span>{{itme.t5}}</span>
                    <div class="c1" @click="change()"></div>
                  </div>
                  <div class="d-d-5">
                    <img src="" alt="">
                    <span><img src="../../public/img/li1.png" alt="">{{itme.t6}}</span>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="paycar">
        <div class="pay-1">
          <div v-html="msg1"></div>
          <div>
          </div>
        </div>
        <div class="pay-1-s" v-if="jk">
          <div class="ssk">
            <span>
              再买
              <span class="ylow">9元</span>
              可减
              <span class="ylow">2元[去凑单]</span>
            </span>
          </div>
          <div class="op">
            <span class="sss">购物车</span>
            <span>清空购物车</span>
          </div>
          <ul class="uul">
            <li class="list-car">
              <img class="ppc" src="../../public/img/v01.png" alt="">
              <div class="ssa">
                <span class="sp1">秋天的第一杯奶茶+2份小料</span><br>
                <span class="sp2">标准(2杯)、椰果、正常冰、正常糖</span><br>
                <span class="spans">￥12</span>
              </div>
              <div class="jjz">
                <span class="jj">+</span> <span class="spans">1</span> <span class="jj">-</span>
              </div>
            </li>
          </ul>
          <div class="ddv">
            <span class="rrs">打包费:</span>
            <span class="spans">￥2</span>
          </div>
          <div>

          </div>
        </div>
        <div class="pay-2">
          <div class="qs" v-bind:style="bk"></div>
          <div class="ccd" @click="ms()">
            <div class="cvv" v-html="msg3"></div>
            <div class="cv">预估另需配送费 ¥3</div>
          </div>
          <router-view></router-view>
          <div class="cb" v-if="show2">15元起送</div>
          <div class="cd" @click="plays" v-if="show3">去结算</div>
        </div>
      </div>
    </div>
    <div class="paycar-2" v-if="shows">
      <div class="block">
        <div class="block-1">秋天的第一杯奶茶+两份小料</div>
        <ul class="listpc">
          <li>
            <span>小料：</span>
            <div class="aa">
              <div class="bb">椰果</div>
            </div>
          </li>
          <li>
            <span>温度：</span>
            <div class="aa">
              <div class="bb">正常冰</div>
              <div class="cc">少冰</div>
              <div class="cc">热</div>
            </div>
          </li>
          <li>
            <span>糖度：</span>
            <div class="aa">
              <div class="bb">正常糖</div>
              <div class="cc">少糖</div>
            </div>
          </li>
        </ul>
        <div class="block-2">
          <div class="ck-1">
            <span class="spans">￥12</span>
            <div class="ck-2" @click="add()">加入购物车</div>
          </div>
          <div class="ck-3">
            <img src="" alt="">
            <span><img src="../../public/img/li1.png" alt="">7.5折，限一份</span>
          </div>
        </div>
      </div>
      <div class="close" @click="close()">
        <img src="../../public/img/close.png" alt="">
      </div>
    </div>

  </main>
</template>

<style scoped>
  .main-con {
    display: flex;
  }

  .dk-1 img {
    width: 16px;
    height: 16px;
  }

  .main-con span {
    position: relative;
    display: inline-block;
    line-height: 4vw;
    color: #333;
  }

  .con-l {
    height: 100%;
    width: 21.33333333vw;
    -webkit-flex: 0 1 auto;
    flex: 0 1 auto;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    z-index: 1;
    position: relative;
    overflow: scroll;
    margin-left: -15px;
    padding-left: 15px;
    background: #f5f5f5;
    overflow: scroll;
  }

  .con-r {
    flex: 1 1;
    overflow-y: auto;
    height: 150vw;
    position: relative;
  }

  .mkl2 {
    font-size: 3.73333333vw;
    line-height: 6.4vw;
    color: #222426;
    width: 100%;
    background-color: #fff;
    padding: 2.66666667vw 2.13333333vw 3.46666667vw;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
  }

  .dk-2 {
    width: 29.73333333vw;
    height: 6.4vw;
    background: url(../../public/img/zp.png);
    background-size: cover;
  }

  .dk-1 span {
    letter-spacing: 0px;
    color: #666;
    position: relative;
    display: inline-block;
    line-height: 4vw;
    font-size: 3.2vw;
  }

  .con-l>div {
    overflow: hidden;
    padding: 4vw 0 4vw 4vw;
    box-sizing: border-box;
    color: #666666;
    text-align: left;
    ;
  }

  .mkl-cursor {
    overflow: hidden;
    padding: 4.26666667vw;
    box-sizing: border-box;
    color: #666666;
    background: #fff;
    font-size: 14px;
    text-align: left;
    font-size: 0;
  }

  .dd {
    display: flex;
    padding-bottom: 7.46666667vw;
    box-sizing: border-box;
    position: relative;
  }

  .dd-1 {
    position: relative;
    width: 25vw;
    height: 25vw;
    margin-top: 0.66666667vw;
    left: 2.13333333vw;
    overflow: hidden;
    border-radius: 3vw;
  }

  .v1 {
    width: 25.33333333vw;
    height: 25.33333333vw;
  }

  .vb {
    width: 8vw;
    position: absolute;
    right: 0;
    top: 0;
  }

  .c1 {
    width: 12.8vw;
    height: 5.33333333vw;
    border-radius: 1.6vw;
    background-size: 12.8vw 5.33333333vw;
    position: relative;
    background-image: url(../../public//img/btn.jpg);
    background-color: #ffbd27;
    background-repeat: no-repeat;
  }

  .dd-2 {
    margin: 0vw 4vw;
  }

  .d-d-1 {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    font-size: 4.26666667vw;
    font-weight: 600;
    color: #222426;
    line-height: 5.33333333vw;
    margin-bottom: 1.6vw;
  }

  .d-d-2 {
    margin-bottom: 1.6vw;
  }

  .d-d-3 {
    font-size: 2.93333333vw;
    color: #858687;
    margin-bottom: 1.6vw;
  }

  .d-d-4 {
    display: flex;
    justify-content: space-between;

  }

  .d-d-4 span {
    color: #FF4A26;
    line-height: 5.33333333vw;
    font-weight: 500;
    font-size: 4.26666667vw
  }

  .d-d-5 span {
    font-size: 2.93333333vw;
    color: #FF4A26;
    line-height: 5.33333333vw;
  }

  .d-d-5 img {
    width: 3vw;
  }


  .sreach {
    margin-top: 3vw;
    line-height: 6vw;
    height: 6vw;
    background-color: rgb(232, 230, 230);
    border-radius: 3vw;
    width: 16vw;
    margin-right: 4vw;
  }

  .ss {
    width: 4vw;
  }

  .ad1 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666666;
    font-size: 16px;
    margin: 0 5vw;
  }

  .ad2 {
    font-weight: 700;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #272727;
    font-size: 16px;
    margin: 0 5vw;
  }

  .ad {
    display: flex;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    height: 40px;
    min-height: 40px;
    background-color: #ffffff;
    position: relative;
    /* border-bottom: 1px solid rgb(227, 227, 227); */
  }

  .tx1 {
    width: 67.73333333vw;
    font-weight: 600;
    font-size: 5.86666667vw;
    color: #222426;
    line-height: 8.26666667vw;
  }

  .tx2 {
    font-size: 2.66666667vw;
    color: #858687;
  }

  .tx3 {
    font-size: 2.66666667vw;
    color: #858687;
    line-height: 6vw;
  }

  .star {
    width: 3vw;
  }

  .sjlogo {
    position: absolute;
    right: 4.26666667vw;
    top: -1.6vw;
    width: 17.33333333vw;
    height: 17.33333333vw;
    border-radius: 2vw;
    overflow: hidden;
  }

  .sjlogo img {
    width: 17.33333333vw;
    height: 17.33333333vw;
  }

  .main-1 {
    position: relative;
    width: 100%;
    padding: 3.33333333vw 4.26666667vw;
    box-sizing: border-box;
    background: white;
    border-radius: 3.2vw 3.2vw 0 0;
  }

  .main-header {
    background-color: #fff;
    margin-top: -8.4vw;
    min-height: 10.66666667vw;
  }

  .header-bk {
    position: absolute;
    top: 0;
    z-index: 2;
    padding: 4vw 4vw 4vw 4vw;
    display: flex;
    justify-content: space-between;
  }

  .header-bk img {
    width: 4vw;
  }

  .le {
    display: inline-block;
    width: 88vw;
  }


  .mk {
    height: 123.096px;
    position: relative;
  }

  .all {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }

  .bk {
    filter: blur(3px);
    color: rgb(255, 255, 255);
    position: relative;
    height: 100%;
    background: linear-gradient(rgba(34, 36, 38, 0.5), rgba(34, 36, 38, 0.5)), url(../../public/img/headerpic.png) center top / cover no-repeat;
  }

  body {
    font-family: "PingFangSC-Regular", Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
  }

  /* .paycar {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 10;

  } */

  .pay-1 {
    position: fixed;
    left: 3.2vw;
    right: 3.2vw;
    bottom: 9.2vw;
    height: 14.4vw;
    justify-content: center;
    font-size: 2.93333333vw;
    color: #222426;
    padding-top: 1.6vw;
    box-sizing: border-box;
    background: #FFF8E1;
    border-radius: 3.2vw 3.2vw 0 0;
    text-align: center;
    display: flex;
    align-items: flex-start;
    z-index: 10;
  }

  .pay-1-s {
    position: fixed;
    left: 0vw;
    right: 0vw;
    bottom: 0vw;
    height: 80vw;
    justify-content: center;
    font-size: 2.93333333vw;
    color: #222426;
    background-color: #fff;
    padding-top: 1.6vw;
    box-sizing: border-box;
    border-radius: 3.2vw 3.2vw 0 0;
    z-index: 11;
  }

  .pay-2 {
    z-index: 11;
    position: fixed;
    left: 3.2vw;
    right: 3.2vw;
    bottom: 3.46666667vw;
    background: #222426;
    border-radius: 6.66666667vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    color: #858687;
    height: 13.33333333vw;
  }

  .ssk {
    background-color: #FFF8E1;
  }

  .qs {
    width: 12.53333333vw;
    height: 18.4vw;
    background: #333;
    position: relative;
    top: -2.66666667vw;
    margin: 0 2.66666667vw;
    /* background: url(../../public/img/qs01.png); */
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
  }

  .ccd {
    flex-direction: row-reverse;
  }

  .cvv {
    line-height: 6vw;
    font-size: 7vw;

    color: #f8c74e;
  }

  .cv {
    font-size: 3vw;
    width: 54vw;
  }

  .ssa .sp1 {
    font-size: 4vw;
  }

  .sp2 {
    width: 2vw;
  }

  .jj {
    font-size: 6vw;
  }

  .rrs {
    line-height: 8vw;
  }

  .cb {
    font-size: 3.73333333vw;
    font-weight: 500;
    padding: 0 3.2vw;
    line-height: 13.33333333vw;
    color: #FFFFFF;
    border-radius: 0 6vw 6vw 0;
  }

  .cd {
    font-size: 3.73333333vw;
    font-weight: 500;
    padding: 0 5.2vw;
    line-height: 13.33333333vw;
    background: #FFB000;
    color: #FFFFFF;
    background: #f8c74e;
    background-image: linear-gradient(135deg, #FFDD33 0%, #FFBB33 100%);
    border-radius: 0 6vw 6vw 0;
  }

  .paycar-2 {
    backdrop-filter: blur(20px) brightness(100%);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    z-index: 11;
  }

  .block {
    background: #ffffff;
    border-radius: 12px;
    width: 80vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .block-1 {
    padding: 0 12px;
    text-align: center;
    margin-top: 14px;
    margin-bottom: 8px;
  }

  .listpc span {
    line-height: 5vw;
    font-size: 3vw;
    margin-bottom: 5px;
  }

  .aa {
    display: flex;
  }

  .bb {
    color: #FFB000;
    border: 1px solid #FFB000;
    background-color: #FFFBF1;
    white-space: nowrap;
    height: 8vw;
    width: 12vw;
    font-size: 2vw;
    position: relative;
    margin-right: 10px;
    line-height: 30px;
    text-align: center;
    padding: 0 10px;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-bottom: 10px;
  }

  .cc {
    border: 1px solid #dad9d9;
    white-space: nowrap;
    height: 8vw;
    width: 12vw;
    font-size: 2vw;
    position: relative;
    margin-right: 10px;
    line-height: 30px;
    text-align: center;
    padding: 0 10px;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-bottom: 10px;
  }

  .listpc {
    padding: 0 4vw;
  }

  .block-2 {
    padding: 1.2vw 4vw;
    text-align: left;
  }

  .ck-1 {
    display: flex;
    justify-content: space-between;

  }

  .spans {
    color: #FF4A26;
    line-height: 8vw;
    font-weight: 500;
    font-size: 8vw
  }

  .ck-2 {
    background: #FFD161;
    background-image: linear-gradient(-135deg, #FFBD27 0%, #FFD161 100%);
    border-radius: 25px;
    height: 25px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 12px;
    line-height: 1;
  }

  .ck-3 span {
    font-size: 2.93333333vw;
    color: #FF4A26;
    line-height: 5.33333333vw;
  }

  .ck-3 img {
    width: 3vw;
  }

  .close {
    position: fixed;
    bottom: 35vw;
  }

  .close img {
    width: 10vw;
  }

  .ylow {
    color: #FF4A26;
  }

  .op {
    height: 10.8vw;
    box-sizing: border-box;
    padding: 3.2vw 4.26666667vw;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
  }

  .sss {
    font-size: 4vw;
  }

  .uul {
    background-color: #fff;

  }

  .list-car {
    position: relative;
    display: flex;
    padding: 4.26666667vw 0;
    margin: 0 15px;
    box-sizing: border-box;
  }

  .ppc {
    width: 16vw;
    height: 16vw;
    border-radius: 1.6vw;
  }

  .ssa {
    margin-left: 2.66666667vw;
    padding-right: 2.66666667vw;
  }

  .jjz {
    width: 18.66666667vw;
    margin-top: 13.73333333vw;
  }

  .ddv {
    height: 10vw;
    margin: 0 4.26666667vw;
    display: flex;
    align-items: flex-start;
  }
</style>
<style>
  * {
    margin: 0;
    padding: 0;
    touch-action: pan-y;
  }
</style>
<script>
  // import router from './assets/js/router.js'
  import { Dialog } from 'vant'
  export default {
    data () {
      return {
        shows: false,
        show2: true,
        show3: false,
        jk: false,
        num: 0,
        msg1: '满25减2;满35减3;满56减4;满80减5;满99减10',
        msg3: '',

        bk: 'background: url(img/qs01.png);    background-size: contain; background-repeat: no-repeat;',
        list: [
          {
            tx: '热销'
          },
          {
            tx: '推荐'
          },
          {
            tx: '折扣'
          },
          {
            tx: '清爽果茶'
          },
          {
            tx: '必点新品'
          },
          {
            tx: '鲜冰淇淋'
          },
          {
            tx: '现煮奶茶'
          },
          {
            tx: '奶盖纯茶'
          },
          {
            tx: '鲜萃咖啡'
          },
          {
            tx: '人气必买'
          },

          {
            tx: '大单划算'
          },
          {
            tx: '秋天的第一杯奶茶'
          }
        ],
        list2: [
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },

          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
          {
            src: 'img/v01.png',
            t1: '秋天的第一杯果茶+2份小料',
            t2: '2杯 ',
            t3: '1杯蜜桃四季春',
            t4: '月售33',
            t5: '￥12.5',
            t6: '7.5折，限一份',
          },
        ]
      }
    },
    methods: {
      change () {
        this.shows = true
      },
      close () {
        this.shows = false
      },
      add () {
        this.shows = false
        this.show2 = false
        this.show3 = true
        this.msg3 = '￥12.5'
        this.msg1 = '折扣已减4.5元'
        this.bk = 'background: url(img/qs02.png);    background-size: cover; '
      },
      plays () {
        Dialog.confirm({
          title: '支付提示',
          message: '是否确认支付？',
        })
          .then(() => {
            this.$router.push("/order")
          })
          .catch(() => {
            // on cancel
          });
      },
      change2 (a) {
        this.num = a;
      },
      ms () {

        this.jk = !this.jk
      }
    }
  }
</script>