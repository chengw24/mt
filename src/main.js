import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueRouter from 'vue-router'
// 配置vue可以使用vuerouter
Vue.use(VueRouter)
import router from './assets/js/router.js'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// export default {
//   components: {
//     [Dialog.Component.name]: Dialog.Component,
//   },
// };



