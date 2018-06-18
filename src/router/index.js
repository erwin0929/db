
// *** 路由配置文件
import Vue from 'vue'
import Router from 'vue-router'
import User from '../views/User'
import A from '../views/A'
import B from '../views/B'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page',
      name: 'Page',
      component: () => import('@/views/Page'),
      children: [
        {
          path: 'movie',
          name: 'Movie',
          cname: '电影',
          component: () => import('@/views/Movie')
        },
        {
          path: 'book',
          name: 'Book',
          cname: '图书',
          component: () => import('@/views/Book')
        },
        {
          path: 'status',
          name: 'Status',
          cname: '广播',
          component: () => import('@/views/Status')
        },
        {
          path: 'group',
          name: 'Group',
          cname: '小组',
          component: () => import('@/views/Group')
        },
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/Home')
        },
        {
          path: '/page',
          redirect: '/page/home'
        },
        {
          // test/abc/id/2023
          path: 'test/:username/id/:id',
          name: 'Test',
          component: import('@/views/Test'),
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
      component: () => import('@/views/Login')
    },
    {
      path: '/register',
      name: 'Register',
      cname: '注册账号',
      component: () => import('@/views/Register')
    }
  ],
  linkActiveClass: 'defaultClass'
})
