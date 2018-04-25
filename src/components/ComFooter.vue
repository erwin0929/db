
<!-- 公用底部footer -->
<template>
  <div>
    <div class="logo-box">
      <img class="pic" src="../assets/douban-app-logo.png">
      <div>
        <div class="db">豆瓣</div>
        <span>我们的精神角落</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'name'
}
</script>

<style scoped lang="scss" type="text/scss">
  .logo-box{
    display: flex;
    justify-content: center;
  }
  .pic{
    margin-right: 0.3rem;
  }
  .db{
    font-size: 1.4rem;
  }
</style>
