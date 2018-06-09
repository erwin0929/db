
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
    <section>
      <div class="h-list-box" v-for="item in homeList" :key="item.id">
        <!-- 左侧文字区 -->
        <div class="txt-box">
          <h2 class="i-title">{{item.title}}</h2>
          <div class="i-intro">{{item.intro}}</div>
          <span class="i-type">{{item.type}}</span>
        </div>
        <!-- 图片 -->
        <div class="h-img"><img :src="item.image"></div>
      </div>
      <!-- 插件组件 -->
      <infinite-loading @infinite="onInfinite" :distance="10" :spinner="'spiral'" ref="infiniteLoading">
        <span slot="no-more">
          没有更多数据了!
        </span>
      </infinite-loading>
    </section>
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
      if (this.homeList.length >= 10) {
        $state.complete()
      } else {
        setTimeout(() => {
          this.loadMore()
          $state.loaded()
        }, 1000)
      }
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
  .h-list-box{
    border-bottom: 1px solid #e3e3e3;
    padding: 1rem 0.8rem 1.9rem 0;
    display: flex;
    justify-content: flex-start;
    .h-img{
      width: 6rem;
      margin-left: 1.2rem;
    }
    .i-title{
      font-size: 1rem;
      color: #494949;
      line-height: 1.5rem;
    }
    .i-intro{
      font-size: 0.6rem;
      color: #aaa;
      line-height: 1.1rem;
      margin: 0.8rem 0 1.2rem;
    }
    .i-type{
      color: #ccc;
      font-size: 0.6rem;
    }
  }
  .txt-box{
    flex: 1;
  }
</style>
