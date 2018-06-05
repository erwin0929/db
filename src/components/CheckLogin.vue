
<!-- 组件:判断是否登录 -->
<template>
  <aside class="check-status">
    <img class="user-img" src="../assets/user_normal.jpg">
    <span class="login">请先登录</span>
    <span class="pencil"></span>
    <span class="camera"></span>
  </aside>
</template>

<script>
export default {
  name: 'CheckLogin'
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .check-status{
    border: {
      bottom: 2px solid #e8e8e8;
    }
    height: 5rem;
    padding: 0 1.3rem;
    display: flex;
    align-items: center;
  }
  .user-img{
    border-radius: 50%;
    flex: 0 1 3rem;
    margin-right: 0.6rem;
  }
  .login{
    font-size: 0.9rem;
    color: #aaa;
    flex: 1;
  }
  $bg-list: pencil,camera;
  $bg-i: true;
  @each $item in $bg-list{
    .#{$item}{
      @if ($bg-i){
        margin-right: 1.4rem;
      }
      $size: 2rem;
      width: $size;
      height: $size;
      background: url("#{$img-path}#{$item}.svg") no-repeat center;
      background-size: contain;
    }
    $bg-i: false;
  }
</style>
