import Vue from 'vue'
import VueRouter from 'vue-router'
import Memos from '../views/Memos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/memos'
  },
  {
    path: '/memos',
    name: 'Memos',
    component: Memos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
