import Vue from 'vue'
import Vuex from 'vuex'
import movie from './modules/movie'
import book from './modules/book'
// status的数据格式 { state, mutations, actions }
import status from './modules/status'
import talion from './modules/talion'
import home from './modules/home'

Vue.use(Vuex)

// 导出该对象,并由main.js注入到子组件中
export default new Vuex.Store({
  modules: {
    movie,
    book,
    status,
    talion,
    home
  }
})
