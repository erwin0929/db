
// *** 路由配置文件
import Vue from 'vue'
import Router from 'vue-router'
import Page from '../views/Page'
import Login from '../views/Login'
import Register from '../views/Register'
import Movie from '../views/Movie'
import Book from '../views/Book'
import Status from '../views/Status'
import Group from '../views/Group'
import Home from '../views/Home'
import Test from '../views/Test'
import User from '../views/User'
import A from '../views/A'
import B from '../views/B'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page',
      name: 'Page',
      component: Page,
      children: [
        {
          path: 'movie',
          name: 'Movie',
          cname: '电影',
          component: Movie
        },
        {
          path: 'book',
          name: 'Book',
          cname: '图书',
          component: Book
        },
        {
          path: 'status',
          name: 'Status',
          cname: '广播',
          component: Status
        },
        {
          path: 'group',
          name: 'Group',
          cname: '小组',
          component: Group
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: '/page',
          redirect: '/page/home'
        },
        {
          // test/abc/id/2023
          path: 'test/:username/id/:id',
          name: 'Test',
          component: Test,
          children: [
            {
              path: 'ca',
              name: 'Ca',
              components: {
                default: User,
                A,
                B
              }
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/page/'
    },
    {
      path: '/login',
      name: 'Login',
      cname: '登录豆瓣',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      cname: '注册账号',
      component: Register
    }
  ],
  linkActiveClass: 'defaultClass'
})
