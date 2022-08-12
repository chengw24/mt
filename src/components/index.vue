<template id="index">
  <div class="home-container">
    <header class="header">
      <div class="location">
        广州<img class="xl" src="../../public/img/xiala.png" alt="">
      </div>
      <div class="search">
        <img class="ss" src="../../public/img/ss.png" alt="">
        <input class="inp" type="text" placeholder="请输入商家名、品类或者商圈">
      </div>
      <div class="my"><img class="wd" src="../../public/img/wode.png" alt=""></div>
    </header>
    <section class="c-guide">
      <div class="guide-content">
        <img class="logo" src="../../public/img/logo.png" alt="">
        <p class="bnm">
          <span class="span1">省钱利器 购物超划算</span>
          <span class="span2">吃喝玩乐尽在美团</span>
        </p>
      </div>
      <button class="btn-in">去APP</button>
    </section>
    <div class="home_body">
      <div class="home1">
        <router-view></router-view>
        <ul class="oo">
          <li v-for="(item, index) in list" :key="index">
            <div class="oo2">
              <router-link to="/nav">
                <img :src="item.src" alt="">
              </router-link>
              <p>{{ item.na }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="home2">
        <h5 class="h5">猜你喜欢</h5>
        <section class="re_list">
          <ul class="business">
            <li v-for="(item, index) in list2" :key="index">
              <div class="ml">
                <img class="card_img" :src="item.src" alt="">
              </div>
              <div class="b">
                <div class="ccc">
                  <h3>{{ item.t1 }}</h3>
                  <p class="ccc-1">{{ item.t2 }}</p>
                </div>
                <div class="uio">
                  <span class="ccc-2">{{ item.t3 }}<span>元</span> </span><span class="msj"> {{ item.t4
                    }}</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <div class="recommend-all-text">查看全部团购</div>

      </div>
    </div>
    <div class="index-footer">
      <div class="index-footer-info">
        <button class="lo-btn">登录</button>
        <div class="info2">
          <span class="ct">城市：</span>
          <img class="loca" src="../../public/img/location.png" alt="">
          <span class="gz">广州</span>
        </div>
      </div>
      <ul class="main_link">
        <li class="link-a">首页</li>
        <li class="link-b">我的</li>
        <li class="link-b">美团下载</li>
        <li class="link-b">电脑版</li>
        <li class="link-c">帮助</li>
      </ul>
      <ul class="friend-link-wrap">
        <li class="friend-link-label">友情链接：</li>
        <li class="friend-link">猫眼电影</li>
        <li class="friend-link">大众点评</li>
        <li class="friend-link">美团旅行</li>
        <li class="friend-link">榛果民宿</li>
        <li class="friend-link">大众点评下载</li>
        <li class="friend-link">美团餐饮系统</li>
        <li class="friend-link">美团餐饮培训</li>
        <li class="friend-link">快驴进货商家合作</li>
        <li class="friend-link">商机/招聘</li>
      </ul>
      <div class="footer-certificate">
        <div class="footer-hr"></div><span class="certificate-text">©2022 美团网 京ICP证070791号</span>
      </div>
    </div>
  </div>
</template>

<style>
  * {
    font-family: "微软雅黑";
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    font-stretch: normal;

  }

  .jj {
    border-radius: 3px;
    border: 1px rgb(197, 193, 193) solid;
  }

  .dc {
    background-color: #0097FF;
    color: #fff;
    font-size: 2.4vw;
    border-radius: 2px;
    padding: 0 0.6vw;
  }

  .sdf {
    width: 4vw;
    height: 4vw;
    background-color: #70BC46;
    border-radius: 3px;
    font-size: 3vw;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<style scoped>
  /* 头部 */
  .home-container {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100vw;
    height: 13.3vw;
    padding: 0 4vw;
    box-sizing: border-box;
    background: linear-gradient(135deg, #ffd000, #ffbd00);
  }

  .xl {
    width: 2.1vw;
    margin-left: 1.3vw;
  }

  .search {
    flex: 1;
    display: flex;
    align-items: center;
    height: 8.5vw;
    padding: 0 3.5vw;
    border-radius: 2.1vw;
    background-color: #fff;
    font-size: 3.5vw;
    color: #999;
    width: 70vw;
  }

  .location {
    display: flex;
    align-items: center;
    margin-right: 4vw;
    flex-shrink: 0;
    font-size: 3.7vw;
    font-family: PingFangSC-Medium;
  }

  .ss {
    width: 3.7vw;
    margin-right: 1.6vw;
    content: normal;
    vertical-align: top;
  }

  .my {
    margin-left: 4vw;
  }

  .wd {
    width: 6.4vw;
    content: normal;
    vertical-align: top;
  }

  .inp {
    font-size: 3.5vw;
    width: 50vw;
    height: 4vh;
    border: 0;
    outline: 0;
  }

  /* app推广 */
  .c-guide {
    width: 100vw;
    padding: 2.1vw 4vw;
    box-sizing: border-box;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .guide-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .logo {
    width: 9.6vw;
  }

  .bnm {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-left: 2.7vw;
    color: #fff;
  }

  .span1 {
    font-size: 3.5vw;
    font-weight: 600;
  }

  .span2 {
    font-size: 2.9vw;
    padding-top: 0.8vw;
  }

  .btn-in {
    border: none;
    height: 8vw;
    padding: 0 2.1vw;
    background-image: linear-gradient(135deg, #ffd000, #ffbd00);
    border-radius: 1.9vw;
    font-size: 3.2vw;
    color: #333;
  }

  .home_body {
    width: 100vw;
    background-color: #f6f7fa;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .home1 {
    padding: 2.7vw 3.2vw;
    font-size: 12px;
    text-align: center;
    display: fixed;
    width: 100vw;
    box-sizing: border-box;
    background-color: #fff;
  }

  .oo {
    display: grid;
    grid-template-columns: repeat(5, 13.3vw);
    grid-gap: 5.3vw 6.4vw;

  }

  .oo2 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .oo img {
    width: 11.2vw;
    border: 0;
    content: normal !important;
    vertical-align: top;
  }

  .oo p {
    margin-top: 1.8vw;
    font-size: 3.2vw;
    color: #333;
  }

  .oo li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home2 {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 26.7vw;
    padding: 3.7vw 2.7vw 0;
    width: 100vw;
    box-sizing: border-box;
    margin-top: 2.7vw;
    background-color: #fff;
  }

  .h5 {
    font-weight: 600;
    margin: 0;
    font-size: 4.5vw;
    color: #333;
  }

  .re_list {
    flex-grow: 1;
    margin-top: 2.7vw;
    position: relative;
  }

  .az {
    display: flex;
  }

  .card_img {
    height: 21.9vw;
    content: normal !important;
    vertical-align: top;
  }

  .ml {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: 24vw;
    height: 21.9vw;
    overflow: hidden;
    background-image: url(data:image/png;base64,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);
    background-color: #e0e0e0;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 50%;
    max-width: 24vw;
  }

  .business li {
    border-top: 0.3vw solid #ddd8ce;
    display: flex;
    align-items: center;
    padding: 1.9vw 0;
  }

  .b {
    display: flex;
    max-width: calc(100% - 26.7vw);
    flex-direction: column;
    justify-content: space-between;
    height: 21.9vw;
    margin-left: 2.7vw;
  }

  .ccc-1 {
    color: #666;
  }

  .ccc-2 {
    font-size: 4.8vw;
    color: #f60;
  }

  .msj {
    color: #666;
  }

  h3 {
    font-size: 4vw;
    color: #333;
  }

  .recommend-all-text {
    height: 10.7vw;
    line-height: 10.7vw;
    font-size: 4vw;
    color: #fe8c00;
    border-bottom: 0.3vw solid #ddd8ce;
    border-top: 0.3vw solid #ddd8ce;
  }

  .index-footer {
    width: 100vw;
    padding: 4vw 6.7vw;
    box-sizing: border-box;
    font-size: 3.2vw;
    background-color: #fff;
  }

  .index-footer-info {
    font-size: 3.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .lo-btn {
    color: #222;
    width: 14.7vw;
    height: 7.2vw;
    font-family: PingFangSC-Medium;
    font-size: 3.5vw;
    background-image: linear-gradient(135deg, #ffd000, #ffbd00);
    border: none;
    border-radius: 1.9vw;
  }

  .loca {
    width: 3.2vw;
    margin-right: 0.8vw;
  }

  .ct {
    color: #999;
    font-size: 3.5vw;
  }

  .gz {
    font-size: 3.5vw;
  }

  .main_link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6.7vw;

    color: #fe8c00;
  }

  .link-a {
    padding-right: 5.3vw;
    line-height: 3.2vw;
    border-right: 0.3vw solid #666;
  }

  .link-b {
    text-align: center;
    padding: 0 5vw;
    line-height: 3.2vw;
    border-right: 0.3vw solid #666;
  }

  .link-c {
    padding-left: 5.3vw;
    line-height: 3.2vw;
    border-right: 0.3vw solid #666;
  }

  .main_link li:nth-child(5) {
    border-right: 0vw solid #666;
  }

  .friend-link-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 4vw;
    color: #646464;
  }

  .friend-link-label {
    margin-top: 2.7vw;
  }

  .friend-link {
    margin: 2.7vw 0 0 5.3vw;
  }

  .friend-link:nth-of-type(2) {
    margin-left: 0;
  }

  .footer-certificate {
    position: relative;
    margin-top: 4vw;
    color: #999;
    text-align: center;
  }

  .footer-certificate .footer-hr {
    position: absolute;
    width: 100%;
    top: 50%;
    border-top: 0.1vw solid #999;
  }

  .certificate-text {
    position: relative;
    padding: 0 4vw;
    background-color: #fff;
  }
</style>
<script>
  export default {
    data () {
      return {
        list2: [
          {
            src: 'img/s1.jpg',
            t1: '蜜雪冰城',
            t2: '[多城市]招牌柠檬水',
            t3: '3.5',
            t4: '门市价:￥4',
          },
          {
            src: 'img/s2.jpg',
            t1: '茶百道',
            t2: '[多城市]爆品-冷萃茶 2 选 1',
            t3: '6.66元',
            t4: '门市价:￥8',
          },
          {
            src: 'img/s3.jpg',
            t1: '华莱士·全鸡汉堡',
            t2: '[多城市]【翻盘作战】套餐',
            t3: '9.9元',
            t4: '门市价:￥19.8',
          },
          {
            src: 'img/s4.jpg',
            t1: '桃园三章',
            t2: '[多城市]盲盒双拼奶茶',
            t3: '9.6元',
            t4: '门市价:￥16',
          },
          {
            src: 'img/s5.jpg',
            t1: '蛙来哒',
            t2: '[多城市]玫瑰冰凉粉',
            t3: '1元',
            t4: '门市价:￥12',
          },
          {
            src: 'img/s6.jpg',
            t1: '名扬煮艺肥牛自助火锅',
            t2: '[[5店通用]工作日单人自助午餐/宵夜',
            t3: '43.5元',
            t4: '门市价:￥69',
          },
          {
            src: 'img/s7.jpg',
            t1: '喜姐炸串',
            t2: '[多城市]脆皮水磨年糕',
            t3: '2元',
            t4: '门市价:￥2.5',
          },
          {
            src: 'img/s8.jpg',
            t1: '珑厨房玲珑私厨',
            t2: '[中山二三路/东山口]原只椰子炖竹丝鸡汤',
            t3: '9.9元',
            t4: '门市价:￥32',
          },
        ],
        list: [
          {
            src: 'img/dcfl01.png',
            na: '美食'
          },
          {
            src: 'img/dcfl02.png',
            na: '猫眼电影'
          },
          {
            src: 'img/dcfl03.png',
            na: '酒店'
          },
          {
            src: 'img/dcfl04.png',
            na: '休闲娱乐'
          },
          {
            src: 'img/dcfl05.png',
            na: '外卖'
          },
          {
            src: 'img/dcfl06.png',
            na: 'KTV'
          },

          {
            src: 'img/dcfl07.png',
            na: '周边游'
          },
          {
            src: 'img/dcfl08.png',
            na: '丽人'
          },
          {
            src: 'img/dcfl09.png',
            na: '母婴亲子'
          },
          {
            src: 'img/dcfl10.png',
            na: '全部分类'
          },
        ]
      }
    }
  }
</script>