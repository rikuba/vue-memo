import Vue from 'vue'
import VueRouter from 'vue-router'
import Memos from '../views/Memos.vue'
import Memo from '../views/Memo.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    redirect: '/memos'
  },
  {
    path: '/memos',
    name: 'Memos',
    component: Memos,
    children: [
      {
        path: ':memoId',
        name: 'Memo',
        component: Memo
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
