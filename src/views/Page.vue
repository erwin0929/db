
<template>
  <div class="page">
    <!-- 公共头部 -->
    <header class="header">
      <span class="logo-txt">豆瓣</span>
      <ul class="nav">
        <li class="nav-section" v-for="item in $router.options.routes[0].children" :key="item.path">
          <router-link class="nav-href" :to="item">{{item.cname}}</router-link>
        </li>
      </ul>
      <span class="search"></span>
    </header>
    <!-- 页面主体部分 -->
    <main class="main">
      <!-- 路由出口 -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      msg: 'name'
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .main{
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling:touch;
  }
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  $header-h: 4rem;
  .header{
    height: $header-h;
    display: flex;
    border-bottom: 1px solid #f3f3f3;
  }
  .logo-txt{
    color: $com-color;
    font-size: 1.6rem;
    line-height: $header-h;
  }
  .nav{
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
  .nav-section{
    $color-list : #2384E8,#9F7860,#E4A813,#2AB8CC;
    $i: 1;
    @each $color in $color-list{
      &:nth-child(#{$i}){
        .nav-href{
          color: $color;
        }
      }
      $i: $i + 1;
    }
    margin: 0 0.4rem;
    .nav-href{
      display: block;
      height: $header-h;
      line-height: $header-h;
    }
  }
  .search{
    margin-left: 0.7rem;
    flex: 0 1 2rem;
    background: url("../assets/search.png") no-repeat center 1.4rem;
    background-size: 2.1rem;
    cursor: pointer;
  }
</style>
