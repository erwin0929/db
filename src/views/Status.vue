
<!-- 广播页 -->
<template>
  <div>
    <aside class="open-app">
      <span class="view-more">打开App,浏览更多</span>
      <span class="download">极速下载</span>
      <span class="open">打开</span>
    </aside>
    <check-login></check-login>
    <com-footer></com-footer>
  </div>
</template>

<script>
import CheckLogin from '../components/CheckLogin'
import ComFooter from '../components/ComFooter'
export default {
  name: 'Status',
  components: { CheckLogin, ComFooter }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .open-app{
    height: 6.7rem;
    padding: 0 0.8rem 0 2.3rem;
    background: url("#{$img-path}promotion_bg.jpg") no-repeat center;
    background-size: contain;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }
  .view-more{
    color: #2ca532;
    flex: 1;
  }
  @mixin open-app{
    $h: 1.6rem;
    border-radius: 3px;
    height: $h;
    line-height: $h;
    padding: 0 0.8rem;
  }
  $open-c: #42bd56;
  .download{
    color: #fff;
    background-color: $open-c;
    margin-right: 0.6rem;
    @include open-app
  }
  .open{
    color: $open-c;
    border: 1px solid $open-c;
    @include open-app
  }
</style>
