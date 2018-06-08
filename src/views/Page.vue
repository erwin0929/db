
<template>
  <div class="page">
    <!-- 公共头部 -->
    <com-header @openTalion="open"></com-header>
    <!-- 页面主体部分 -->
    <main class="main">
      <!-- 路由出口 -->
      <router-view></router-view>
    </main>
    <!-- 搜索弹出层 -->
    <talion v-if="isShow" @closeTalion="close"></talion>
  </div>
</template>

<script>
import Talion from '../components/Talion'
import ComHeader from '../components/ComHeader'
export default {
  name: 'Page',
  components: { Talion, ComHeader },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    close () {
      this.isShow = !this.isShow
    },
    open () {
      this.isShow = true
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
</style>
