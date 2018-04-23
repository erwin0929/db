
// *** 路由配置文件
import Vue from 'vue'
import Router from 'vue-router'
// import Page from '../views/Page'
import Login from '../views/Login'
import Register from '../views/Register'
// import Movie from '../views/Movie'

Vue.use(Router)

// 注册和登录页完成,准备使用下Vuex和promise

export default new Router({
  routes: [
    {
      path: '/page',
      name: 'Page',
      // component: Page,
      children: [
        {
          path: 'movie',
          name: 'Movie'
          // component: Movie
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
