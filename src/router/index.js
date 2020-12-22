import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import UserInfo from '../views/UserInfo'
import UserManage from '../views/UserManage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: 'userinfo', component: UserInfo },
      { path: 'usermanage', component: UserManage }
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
