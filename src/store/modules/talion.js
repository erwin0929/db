import axios from 'axios'
import Mock from 'mockjs'
Mock.mock(/Api\/talion/, 'post', {
  'list|3': [{
    'id|+1': 1,
    'title|+1': [
      '电影',
      '电视',
      '图书',
      '同城',
      '小组',
      '阅读',
      '游戏',
      '应用',
      '音乐',
      '东西',
      'FM',
      '市集'
    ],
    'intro|+1': [
      '影院热议',
      '正在热播',
      '畅销排行',
      '周末活动',
      '志趣相投'
    ],
    'color|+1': [
      'rgb(35, 132, 232)',
      'rgb(122, 106, 219)',
      'rgb(159, 120, 96)',
      'rgb(230, 70, 126)',
      'rgb(42, 184, 204)',
      'rgb(244, 143, 46)',
      'rgb(159, 120, 96)',
      'rgb(87, 116, 197)',
      'rgb(89, 108, 221)',
      'rgb(225, 100, 77)',
      'rgb(64, 207, 169)',
      'rgb(66, 189, 86)'
    ]
  }]
})

const state = {
  navType: []
}

const mutations = {
  getData (state, payLoad) {
    state.navType = payLoad.data.list
  }
}

const actions = {
  getData ({ commit }) {
    axios.post('Api/talion')
      .then((response) => {
        let { data } = response
        commit({
          type: 'getData',
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
