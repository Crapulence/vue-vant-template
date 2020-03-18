import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '*',
    redirect: '/goods'
  },
  {
    name: 'user',
    component: () => import('@/views/user'),
    meta: {
      title: '会员中心'
    }
  }, {
    name: 'cart',
    component: () => import('@/views/cart'),
    meta: {
      title: '购物车'
    }
  }, {
    name: 'goods',
    component: () => import('@/views/goods'),
    meta: {
      title: '商品详情'
    }
  }
]

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
})

const router = new VueRouter({
  routes
})

router.beforeEach((to, _, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
