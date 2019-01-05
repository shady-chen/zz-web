import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AppIndex from '@/components/AppIndex'
import RedPage from '@/components/RedPage'
import UserCenter from '@/components/UserCenter'
import UserInfo from '@/components/UserInfo'
import OrderList from '@/components/OrderList'
import OrderList2 from '@/components/OrderList2'
import OrderList3 from '@/components/OrderList3'
import ModifyPassword from '@/components/ModifyPassword'
import OrderOne from '@/components/OrderOne'
import NoticeList from '@/components/NoticeList'
import NoticeOne from '@/components/NoticeOne'
import BankList from '@/components/BankList'
import BankUpdate from '@/components/BankUpdate'
import BankAdd from '@/components/BankAdd'
import WithdrawList from '@/components/WithdrawList'
import WithdrawDetails from '@/components/WithdrawDetails'
import WithdrawAdd from '@/components/WithdrawAdd'
import Moneysteam from '@/components/Moneysteam'
import MoneysteamOne from '@/components/MoneysteamOne'
import MyTeam from '@/components/MyTeam'
import showAllSons from '@/components/showAllSons'
import Rules from '@/components/Rules'

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
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/OrderList',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/OrderList2',
      name: 'OrderList2',
      component: OrderList2
    },
    {
      path: '/OrderList3',
      name: 'OrderList3',
      component: OrderList3
    },
    {
      path: '/ModifyPassword',
      name: 'ModifyPassword',
      component: ModifyPassword
    },
    {
      path: '/OrderOne/:id',
      name: 'OrderOne',
      component: OrderOne
    },
    {
      path: '/NoticeList',
      name: 'NoticeList',
      component: NoticeList
    },
    {
      path: '/NoticeOne/:id',
      name: 'NoticeOne',
      component: NoticeOne
    },
    {
      path: '/BankUpdate/:id',
      name: 'BankUpdate',
      component: BankUpdate
    },
    {
      path: '/BankList',
      name: 'BankList',
      component: BankList
    },
    {
      path: '/BankAdd',
      name: 'BankAdd',
      component: BankAdd
    },
    {
      path: '/WithdrawList',
      name: 'WithdrawList',
      component: WithdrawList
    },
    {
      path: '/WithdrawDetails/:id',
      name: 'WithdrawDetails',
      component: WithdrawDetails
    },
    {
      path: '/WithdrawAdd',
      name: 'WithdrawAdd',
      component: WithdrawAdd
    },
    {
      path: '/Moneysteam',
      name: 'Moneysteam',
      component: Moneysteam
    },
    {
      path: '/MoneysteamOne/:id',
      name: 'MoneysteamOne',
      component: MoneysteamOne
    },
    {
      path: '/MyTeam',
      name: 'MyTeam',
      component: MyTeam
    },
    {
      path: '/showAllSons',
      name: 'showAllSons',
      component: showAllSons
    },
    {
      path: '/Rules',
      name: 'Rules',
      component: Rules
    }
  ]
})
