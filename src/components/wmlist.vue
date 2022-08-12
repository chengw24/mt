<template id="index">
  <div class="home-container">
    <header class="header">
      <div class="location">
        <img class="xl" src="../../public/icon-img/lo.png" alt=""> 欣业大厦 <img class="xl2"
          src="../../public/icon-img/ri.png" alt="">
      </div>
      <div class="search">
        <img class="ss" src="../../public/img/ss.png" alt="">
        <input class="inp" type="text" placeholder="请输入商家或者商品名称">
        <div class="btn-ss">搜索</div>
      </div>
    </header>
    <div class="home_body">
      <div class="home1">
        <router-view></router-view>
        <ul class="oo">
          <li v-for="(item, index) in list" :key="index">
            <div class="oo2">
              <router-link to="/wmlist">
                <img :src="item.src" alt="">
              </router-link>
              <p>{{ item.na }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="pic">
        <div class="pic-2">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img class="pic-3" :src="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="lck">
        <van-dropdown-menu class="lec">
          <van-dropdown-item class="lcc" v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <div class="m-filter-quick">
          <div class="quick-wrapper">
            <div class="quick-item">
              <div class="quick-item-hidebar">
                <div class="quick-item-tit">
                  <div class="quick-item-tittxt">点评高分</div>
                </div>
              </div>
            </div>
            <div class="quick-item active-item">
              <div class="quick-item-hidebar">
                <div class="quick-item-tit">
                  <div class="quick-item-tittxt">优惠商家</div>
                </div>
              </div>
            </div>
            <div class="quick-item">
              <div class="quick-item-hidebar">
                <div class="quick-item-tit">
                  <div class="quick-item-tittxt">满减优惠</div>
                </div>
              </div>
            </div>
            <div class="quick-item">
              <div class="quick-item-hidebar">
                <div class="quick-item-tit">
                  <div class="quick-item-tittxt">品牌商家</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home2">
        <section class="re_list">
          <ul class="business">
            <router-view></router-view>
            <li v-for="(item, index) in list2" :key="index">
              <div class="ml">
                <router-link to="/detail"><img class="card_img" :src="item.src" alt=""></router-link>
                <div class="ml-2">
                  <img class="pic1" src="../../public/img/pp.png" alt="">
                </div>
              </div>
              <div class="b">
                <div class="ccc">
                  <div class="jkl">
                    <img class="pic2" src="../../public/img/sj.png" alt="">
                    <h3 class="h3">{{ item.t1 }}</h3>
                  </div>
                  <div class="jkl">
                    <span class="pf one">4.8分</span>
                    <span>月售400+</span>
                    <span>人均￥9</span>
                  </div>
                  <div class="jkl-2">
                    <div>
                      <span>起送￥18</span>
                      <span>配送</span>
                      <span>约3￥</span>
                    </div>
                    <div>
                      <span>30分钟</span>
                      <span>211m</span>
                    </div>
                  </div>
                  <div class="jkl">
                    <img class="pic2" src="../../public/img/lu.png" alt="">
                    <span class="lp one">
                      员村奶茶人气排行榜第二名
                    </span>
                  </div>
                  <div class="jkl-la">
                    <div>25减2</div>
                    <div>35减3</div>
                    <div>56减4</div>
                    <div>80减5</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
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
</style>
<style scoped>
  /* 头部 */
  .home-container {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(245, 245, 246);
  }

  header {
    position: sticky;
    z-index: 300;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.6vw 3.2vw 0px;
    background: #FFCC33;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  .xl {
    width: 5vw;
  }

  .xl2 {
    width: 3vw;
  }

  .search {
    margin: 1.6vw 0px 2.13333333vw 0px;
    position: relative;
    background: #fff;
    border-radius: 100px;
    height: 9.06666667vw;
    padding: 0 4vw;
  }

  .location {
    font-weight: 600;
    font-size: 3.73333333vw;
    color: #222426;
    line-height: 4.53333333vw;
    -webkit-flex: auto;
    flex: auto;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    height: 8vw;
  }

  .ss {
    width: 3.7vw;
    margin: 2vw 1.6vw 0 0;
    content: normal;
    vertical-align: top;
  }

  .btn-ss {
    font-weight: 500;
    font-size: 3.73333333vw;
    color: #222426;
    line-height: 5.06666667vw;
    padding: 1.2vw 3.46666667vw;
    position: absolute;
    right: 0.93333333vw;
    top: 0.8vw;
    background: #FECE4D;
    border-radius: 13.33333333vw;
  }

  .inp {
    width: 50vw;
    border: none;
    height: 100%;
    box-sizing: border-box;
    border-radius: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 30px;
    font-size: 3.2vw;
    color: #858687;
    opacity: 1;
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
    background-color: rgb(245, 245, 246);
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
    width: 100%;
    height: 100%;
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

  .pic {
    position: relative;
    margin: 4.8vw 3.73333333vw;
    margin-bottom: 0;
  }

  .pic-2 {
    overflow: hidden;
    border-radius: 3.2vw;
  }

  .pic-3 {
    width: 300vw;
    display: flex;
  }

  .pic-3 li {
    width: 347px;
  }

  .pic-3 {
    width: 347px;
  }

  .lck {
    padding: 0 4vw;
  }

  .lec.van-dropdown-menu__bar {
    background-color: rgb(245, 245, 246);
  }

  .lec.van-dropdown-menu>.van-dropdown-menu__bar {
    align-items: center;
    background-color: rgb(245, 245, 246);
  }

  .m-filter-quick {
    height: 37px;
    overflow: hidden;
    padding: 4px 0 6px 0;
    box-sizing: border-box;
    position: relative;
  }

  .m-filter-quick .quick-wrapper {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .m-filter-quick .quick-item {
    height: 31px;
  }

  .m-filter-quick .quick-item {
    height: 31px;
  }

  .m-filter-quick .quick-item-hidebar {
    width: 82px;
    height: 27px;
    border-radius: 6px;
    overflow: hidden;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    background-color: #fff;
    position: relative;
  }

  .m-filter-quick .quick-item-tit {
    overflow: hidden;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-flex: 1;
    flex: 1;
    -webkit-justify-content: center;
    justify-content: center;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    box-sizing: border-box;
  }

  .m-filter-quick .quick-item-tittxt {
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
    font-size: 12px;
    color: #575859;
    line-height: 27px;
    text-align: center;
  }

  .home2 {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 26.7vw;
    width: 100vw;
    box-sizing: border-box;
    background-color: rgb(245, 245, 246);
    padding: 10px;
  }

  .re_list {
    position: relative;
  }

  .card_img {
    display: block;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 6px;
  }

  .ml {
    position: relative;
    margin-right: 2vw;
    width: 103px;
    height: 103px;
    border: 1px solid #f2f1f0;
    box-sizing: border-box;
    border-radius: 6px;
  }

  .ml-2 {
    position: absolute;
    top: -2px;
    right: -2px;
    height: 18px;
  }

  .pic1 {
    height: 4.8vw;
  }

  .pic2 {
    height: 4vw;
  }

  .business li {
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid #f2f1f0;
    border-radius: 6px;
    overflow: visible;

  }

  .b {
    display: flex;
    flex-direction: column;
    width: 65vw;
  }

  .jkl {
    display: flex;
    align-items: center;
    line-height: 5.5vw;
  }

  .jkl-2 {
    display: flex;
    justify-content: space-between;
    line-height: 6vw;
  }

  .h3 {
    font-weight: 600;
    font-size: 4vw;
    color: #222426;
    margin-right: 8px;
  }

  .b span {
    color: #666;
    font-size: 3.5vw;
    margin-right: 2vw;
  }

  .pf.one {
    color: #ff8000;
    font-weight: 500;
  }

  .lp.one {
    color: rgb(155, 118, 56);
    background-color: rgb(251, 245, 232);
  }

  .jkl-la div {
    display: inline-block;
    color: #fb4e44;
    border: 0.13333333vw solid rgb(255, 198, 193);
    padding: 0 0.93333333vw;
    height: 4.26666667vw;
    line-height: 4.26666667vw;
    position: relative;
    vertical-align: middle;
    margin-right: 2vw;
    border-radius: 1vw;
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
        value1: 0,
        value2: 'a',
        option1: [
          { text: '全部商品', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 },
        ],
        option2: [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ],

        images: [
          "img/z01.jpg",
          'img/z02.jpg',
          'img/z03.jpg'
        ],
        list2: [
          {
            src: 'img/a01.png',
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
            src: 'img/dc01.png',
            na: '美食'
          },
          {
            src: 'img/dc02.png',
            na: '生鲜蔬菜'
          },
          {
            src: 'img/dc03.png',
            na: '甜点饮品'
          },
          {
            src: 'img/dc04.png',
            na: '鲜花蛋糕'
          },
          {
            src: 'img/dc05.png',
            na: '美团专送'
          },
          {
            src: 'img/dc06.png',
            na: '午餐优选'
          },
          {
            src: 'img/dc07.png',
            na: '快食简餐'
          },

          {
            src: 'img/dc08.png',
            na: '汉堡披萨'
          },
          {
            src: 'img/dc09.png',
            na: '异国料理'
          },
          {
            src: 'img/dc10.png',
            na: '小吃馆'
          }

        ]
      }
    }
  }

</script>