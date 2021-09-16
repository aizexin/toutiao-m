import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login/index.vue'
import layout from '../views/layout/index.vue'
import home from '../views/home/index.vue'
import qa from '../views/qa/index.vue'
import video from '../views/video/index.vue'
import my from '../views/my/index.vue'

const routes = [
  {
    path: '/',
    redirection: '/login'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/layout',
    component: layout,
    redirection: '/home',
    children: [
      {
        path: '/home',
        component: home
      },
      {
        path: '/qa',
        component: qa
      },
      {
        path: '/video',
        component: video
      },
      {
        path: '/my',
        component: my
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login
router.beforeEach((to, from, next) => {
  console.log('xxxxxx' + from.path)
  if (to.path === '/') return next('/home')
  // if (from.location.host === 'https://open.work.weixin.qq.com/') {
  //   return next('/login')
  // }
  // const tokenStr = window.sessionStorage.getItem('token')
  // if (!tokenStr) return next('/loginQR')
  next()
})

export default router
