// book使用的store
import axios from 'axios'
import Mock from 'mockjs'
import { fic, noFic, find, type } from '../../mock/book'

Mock.mock(/Api\/fic/, fic)
Mock.mock(/Api\/noFic/, noFic)
Mock.mock(/Api\/find/, find)
Mock.mock(/Api\/type/, type)

const state = {
  fic: [],
  noFic: [],
  find: [],
  type: []
}

const mutations = {
  getBook (state, payLoad) {
    let [fic, noFic, find, type] = payLoad.data
    state.fic = fic.data.list
    state.noFic = noFic.data.list
    state.find = find.data
    state.type = type.data.list
  }
}

const actions = {
  getBook ({ commit }) {
    axios.all([
      axios.get('Api/fic'),
      axios.get('Api/noFic'),
      axios.get('Api/find'),
      axios.get('Api/type')
    ])
      .then(axios.spread((...data) => {
        commit({
          type: 'getBook',
          data
        })
      }))
  }
}

export default {
  state,
  mutations,
  actions
}
