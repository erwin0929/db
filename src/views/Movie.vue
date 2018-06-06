
<!-- 电影页 -->
<template>
  <div class="movie-page">
    <scroll-list :title="title.movieTitle" :items="hotMovie"></scroll-list>
    <scroll-list :title="title.onlineTitle" :items="onlineMovies"></scroll-list>
    <scroll-list :title="title.newMovieTitle" :items="newMovies"></scroll-list>
    <scroll-list :title="title.findTitle" :items="findMovie" :model="showModel"></scroll-list>
    <!-- 分类浏览 -->
    <type-browse :type="type"></type-browse>
    <!-- 底部 -->
    <com-footer></com-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ScrollList from '../components/ScrollList'
import ComFooter from '../components/ComFooter'
import TypeBrowse from '../components/TypeBrowse'
export default {
  name: 'Movie',
  components: { ScrollList, ComFooter, TypeBrowse },
  data () {
    return {
      title: {
        movieTitle: '影院热映',
        onlineTitle: '免费在线观影',
        newMovieTitle: '新片速递',
        findTitle: '发现好电影'
      },
      showModel: 'tag'
    }
  },
  methods: {
    ...mapActions([
      'getMovie'
    ])
  },
  computed: {
    ...mapState({
      hotMovie: state => state.movie.hotMovie,
      onlineMovies: state => state.movie.onlineMovies,
      newMovies: state => state.movie.newMovies,
      findMovie: state => state.movie.findMovie,
      type: state => state.movie.type
    })
  },
  mounted () {
    this.getMovie()
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
</style>
