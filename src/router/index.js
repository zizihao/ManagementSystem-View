import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/usermanage',
    children: [
      { path: 'userinfo', component: () => import('../views/UserInfo/index.vue') },
      { path: 'usermanage', component: () => import('../views/UserManage/index.vue') }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
