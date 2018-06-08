
<!-- 主页 -->
<template>
  <div class="home-page">
    <!-- 顶部快速链接 -->
    <div class="f-top-nav">
      <ul class="top-nav">
        <li class="nav-list">
          <router-link class="nav-link" :to="{ name: 'Movie' }">影院热映</router-link>
        </li>
        <li class="nav-list">
          <router-link class="nav-link" :to="{ name: 'Status' }">欧美新碟榜</router-link>
        </li>
      </ul>
      <ul class="top-nav">
        <li class="nav-list">
          <router-link class="nav-link" :to="{ name: 'Register' }">注册账号</router-link>
        </li>
        <li class="nav-list">
          <router-link class="nav-link" :to="{ name: 'Login' }">登录豆瓣</router-link>
        </li>
      </ul>
    </div>
    <!-- 滚动插件列表 -->
    <div>
      <p v-for="item in homeList" :key="item.id">
        <span>{{item.title}}</span>
        <img :src="item.image">
      </p>
      <infinite-loading @infinite="onInfinite" :spinner="'spiral'" ref="infiniteLoading"></infinite-loading>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'Home',
  components: { InfiniteLoading },
  computed: {
    ...mapState({
      homeList: state => state.home.homeList
    })
  },
  methods: {
    onInfinite ($state) {
      setTimeout(() => {
        this.loadMore()
      }, 1000)
    },
    ...mapActions([
      'loadMore'
    ])
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .f-top-nav{
    padding: 1.4rem 0;
  }
  .top-nav{
    $mar-r: 0.4rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: $mar-r;
    .nav-list{
      border-radius: 1px;
      background: #f6f6f6;
      flex: 1;
      &:first-child{
        margin-right: $mar-r;
      }
      .nav-link{
        font-size: 0.95rem;
        color: #494949;
        $h: 3rem;
        height: $h;
        line-height: $h;
        display: block;
        text-align: center;
      }
    }
  }
</style>
