// book使用的store
import axios from 'axios'
import Mock from 'mockjs'
import { fic, noFic, paperBook, paperFirstShow, find, type } from '../../mock/book'

Mock.mock(/Api\/fic/, fic)
Mock.mock(/Api\/noFic/, noFic)
Mock.mock(/Api\/find/, find)
Mock.mock(/Api\/paperBook/, paperBook)
Mock.mock(/Api\/type/, type)
Mock.mock(/Api\/paperFirstShow/, paperFirstShow)

const state = {
  fic: [],
  noFic: [],
  find: [],
  paperBook: [],
  type: [],
  paperFirstShow: []
}

const mutations = {
  getBook (state, payLoad) {
    let [fic, noFic, find, paperBook, paperFirstShow, type] = payLoad.data
    state.fic = fic.data.list
    state.noFic = noFic.data.list
    state.find = find.data
    state.paperBook = paperBook.data.list
    state.type = type.data.list
    state.paperFirstShow = paperFirstShow.data.list
  }
}

const actions = {
  getBook ({ commit }) {
    axios.all([
      axios.get('Api/fic'),
      axios.get('Api/noFic'),
      axios.get('Api/find'),
      axios.get('Api/paperBook'),
      axios.get('Api/paperFirstShow'),
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
