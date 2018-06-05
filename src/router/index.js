
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
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
