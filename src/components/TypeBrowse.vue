
<!-- 分类浏览 -->
<template>
  <nav class="type-browse">
    <div class="type-title">分类浏览</div>
    <div class="t-box">
      <section class="t-section" v-for="item in type" :key="item.title">
        <a :href="baseUri + item.href">
          <span>{{item.title}}</span>
          <i class="r-arrow"></i>
        </a>
      </section>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TypeBrowse',
  props: ['type'],
  data () {
    return {
      baseUri: 'https://m.douban.com/'
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .t-box{
    display: flex;
    flex-wrap: wrap;
  }
  .type-title{
    font-size: 1.1rem;
    padding: 2rem 0;
  }
  $t-section-pad: 1rem;
  .t-section{
    $bor: 1px solid #eee;
    border: $bor;
    border-left: none;
    margin-top: -1px;
    padding-right: $t-section-pad;
    flex: 0 0 50%;
    a{
      height: 3.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &:nth-child(2n){
      padding-left: $t-section-pad;
    }
    span{
      color: $com-color;
    }
  }
  .r-arrow{
    $bor: 1px solid #ccc;
    $size: 0.6rem;
    width: $size;
    height: $size;
    border-right: $bor;
    border-bottom: $bor;
    transform: rotate3d(0,0,1,-45deg);
  }
</style>
