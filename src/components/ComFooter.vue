
<!-- 公用底部footer -->
<template>
  <div class="footer">
    <div class="logo-box">
      <img class="pic" src="../assets/douban-app-logo.png">
      <div>
        <div class="db">豆瓣</div>
        <span>我们的精神角落</span>
      </div>
    </div>
    <div class="go-app">去 App Store 免费下载 iOS 客户端</div>
  </div>
</template>

<script>
export default {
  name: 'name'
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .footer{
    padding: 0.3rem 0 2rem;
  }
  .logo-box{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pic{
    width: 3.3rem;
    margin-right: 1rem;
  }
  .db{
    font-size: 1.4rem;
  }
  .go-app{
    color: $com-color;
    line-height: 3.5rem;
    text-align: center;
  }
</style>
