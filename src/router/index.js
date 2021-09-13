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

export default router
