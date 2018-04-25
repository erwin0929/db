
<!-- 电影页 -->
<template>
  <div class="movie-page">
    <scroll-list :title="title.movieTitle"></scroll-list>
    <scroll-list :title="title.onlineTitle"></scroll-list>
    <scroll-list :title="title.newMovieTitle"></scroll-list>
    <scroll-list :title="title.findTitle" :model="showModel"></scroll-list>
    <com-footer></com-footer>
  </div>
</template>

<script>
import ScrollList from '../components/ScrollList'
import ComFooter from '../components/ComFooter'
export default {
  name: 'Movie',
  components: { ScrollList, ComFooter },
  data () {
    return {
      title: {
        movieTitle: '影院热议',
        onlineTitle: '免费在线观影',
        newMovieTitle: '新片速递',
        findTitle: '发现好电影'
      },
      showModel: 'tag'
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .movie-page{
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling:touch;
  }
</style>
