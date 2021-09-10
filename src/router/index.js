import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login/index.vue'

const routes = [
  {
    path: '/',
    rediraction: '/login'
  },
  {
    path: '/login',
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
