import axios from 'axios'
import Mock from 'mockjs'
import { hotMovie, onlineMovie, newMovie, findMovie, type } from '../../mock/movie'

Mock.mock(/Api\/movie\/in_theaters/, hotMovie)
Mock.mock(/Api\/movie\/coming_soon/, onlineMovie)
Mock.mock(/Api\/movie\/top250/, newMovie)
Mock.mock(/Api\/findMovie/, findMovie)
Mock.mock(/Api\/type/, type)

const state = {
  hotMovie: [],
  onlineMovies: [],
  newMovies: [],
  findMovie: [],
  type: []
}

const mutations = {
  getMovie (state, payLoad) {
    let [ hotMovie, onlineMovies, newMovies, findMovie, type ] = payLoad.data
    state.hotMovie = hotMovie.data.list
    state.onlineMovies = onlineMovies.data.list
    state.newMovies = newMovies.data.list
    state.findMovie = findMovie.data
    state.type = type.data.list
  }
}

const actions = {
  getMovie ({ commit }) {
    axios.all([
      axios.get('Api/movie/in_theaters?count=8'),
      axios.get('Api/movie/coming_soon?count=8'),
      axios.get('Api/movie/top250?count=8'),
      axios.get('Api/findMovie'),
      axios.get('Api/type')
    ])
      // .then(axios.spread((hotMovie, onlineMovies, newMovies, findMovie, type) => {
      .then(axios.spread((...data) => {
        commit({
          type: 'getMovie',
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
