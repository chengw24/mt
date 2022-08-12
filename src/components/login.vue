<template id="login">
  <main>
    <router-view></router-view>
    <div class="herder-logo">
      <div class="meituan">
        <img class="logo" src="../../public/img/logo.png" alt="">
      </div>
    </div>
    <div class="main">
      <div class="ph">
        <span>中国 </span>
        <span> +86</span>
        <span><img class="icon-1" src="../../public/icon-img/ri.png" alt=""></span>
      </div>
      <div class="phone">
        <input class="text" type="text" placeholder="请输入手机号码"><span>获取验证码</span>
      </div>
      <div class="pas">
        <input class="text" type="text" placeholder="请输入验证码">
      </div>
      <router-link to="/my"><input class="rs" type="button" value="登录"></router-link>
      <div class="dsd">未注册的手机号验证后自动创建美团账户</div>
      <div class="yszc">
        <div>
          <input type="checkbox">
        </div>
        <div>
          <p>我已阅读并同意<router-link to="/register">《美团用户协议》、</router-link>
            <router-link to="/register">《隐私政策》</router-link>，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
          </p>
        </div>

      </div>
      <div class="gh">
        <span>账号登陆</span>
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
  .meituan {
    margin: 6vw 39.5vw;
  }

  .logo {
    width: 21vw;
  }

  .ph {
    font-size: 4vw;
    margin: 0 3vw;
    line-height: 4vw;
    /* display: flex; */
  }

  .icon-1 {
    width: 3vw;
  }

  .rs {
    margin-top: 10vw;
    font-size: 5vw;
    margin-left: 2.5%;
    width: 95%;

    border: 0;
    border-radius: 3vw;
    background-image: linear-gradient(-133deg, #FFE77B 0%, #FFE77B 100%);
    color: #222222;
    line-height: 12vw;
  }

  .phone {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-left: 2.5%;
    display: flex;
    line-height: 12vw;
    border-bottom: 0.01rem solid #E5E5E5;

  }

  .text {
    font-size: 5vw;
    color: #333333;
    border: 0;
    outline: none;
    width: 60vw;
  }

  .pas {
    margin-top: 5vw;
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-left: 2.5%;
    display: flex;
    line-height: 12vw;
    border-bottom: 0.01rem solid #E5E5E5;
  }

  .dsd {
    line-height: 5vw;
    font-size: 3vw;
    color: rgba(0, 0, 0, 0.50);
    text-align: center;
    font-weight: 400;
  }

  .yszc {
    padding: 10vw 5vw;
    display: flex;
  }

  .yszc p {
    font-size: 3.5vw;
    color: rgba(0, 0, 0, 0.50);
    font-weight: 400;
  }

  .yszc input {
    width: 5vw;
    margin-top: 1vw;
  }

  .gh {
    font-size: 4vw;
    color: #333333;
    text-align: center;
    margin: 10% 0 10% 0;
    font-weight: 400;
  }

  .main {
    padding: 8vw 5vw;

  }
</style>