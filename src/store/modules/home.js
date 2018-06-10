import Mock from 'mockjs'
import axios from 'axios'

Mock.mock(/Api\/getHome/, 'post', {
  'list|10': [
    {
      'id|+1': 1,
      'title|+1': [
        '【国家地理】经典影像盛宴•北京中华世纪坛站',
        '这样过周末心不累，周末去五台山寺院做义工，体验2日禅文化活动。',
        '爱丽丝奇境缤纷之旅中国首展.北京站',
        '全球18家最美图书馆之一篱苑书屋，一日休闲徒步活动！',
        '【周末活动、端午假期— 户外活动/漂流/游玩/爬山/野营】活动都有'
      ],
      'intro|1': [
        '购买须知：限购说明：每单限购6张 座位类型：现场不设座位，均',
        '活动报名咨询微信：blueeye918查看更看近期活动请关注',
        '点击下方链接直接跳转周六日活动http://mp.weixi'
      ],
      'type|1': [
        '亲子',
        '旅行',
        '讲座',
        '聚会',
        '音乐'
      ],
      'image': `@dataImage(100x100, 测试图片)`
    }
  ]
})

const state = {
  getIndex: 0,
  length: 3,
  homeList: []
}

const mutations = {
  loadMore (state, payLoad) {
    let [ index, length ] = [0, 3]
    console.log(payLoad)
    state.homeList = state.homeList.concat(payLoad.list.splice(index, length))
    index += length
  }
}

const actions = {
  loadMore ({ commit }) {
    axios.post('Api/getHome')
      .then((response) => {
        let { data: { list } } = response
        commit({
          type: 'loadMore',
          list
        })
      })
  }
}

export default {
  state,
  mutations,
  actions
}
