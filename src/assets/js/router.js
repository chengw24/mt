import VueRouter from 'vue-router'
import nav from '../../components/nav.vue'
import index from '../../components/index.vue'
import order from '../../components/order.vue'
import my from '../../components/my.vue'
import login from '../../components/login.vue'
import wmlist from "../../components/wmlist.vue"
import detail from "../../components/detail.vue"

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: index,
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/nav',
      component: nav,
      children: [
        {
          path: '/wmlist',
          component: wmlist,
        },
        {
          path: '/order',
          component: order
        },
        {
          path: '/my',
          component: my
        },
        {
          path: '/',
          component: wmlist
        },
      ],

    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/login',
      component: login
    }



  ]
})

export default router;