import axios from 'axios'
import Mock from 'mockjs'
// 随机数据,拦截请求为post的status路径
Mock.mock(/Api\/status/, 'post', {
  'list|3-6': [
    {
      'id|+1': 1,
      'like|10-500': 1,
      'name': '@cname',
      'commet|10-500': 1,
      'retweet|10-500': 1,
      'dateTime': '@datetime',
      'title|1': [
        '我是谁?我在干什么',
        '这是我最新的日记',
        '每天都要写哦!',
        '没有音乐的日子'
      ]
    }
  ]
})
// 小组页的各类数据,由store下的index.js调用
const state = {
  // 评论数据
  list: []
}

const mutations = {
  // 载荷中保留了随机数据,将这些数据分配给state对应的属性中
  // 此时 computed属性中已获取到list数据,v-for即可
  increment (state, payLoad) {
    state.list = payLoad.data.list
  }
}

const actions = {
  // 请求远程路径,该远程路径被mock拦截,并将随机数据传入response中
  // 随后唤醒mutations中increment方法,将获取到的数据传递给increment
  getData ({ commit }) {
    axios.post('Api/status')
      .then(response => {
        let { data } = response
        commit({
          type: 'increment',
          data
        })
      })
  }
}

export default {
  state,
  mutations,
  actions
}
