import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AppIndex from '@/components/AppIndex'
import RedPage from '@/components/RedPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/appIndex',
      name: 'appIndex',
      component: AppIndex
    },
    {
      path: '/redPage',
      name: 'redPage',
      component: RedPage
    },
  ]
})
