
<!-- 横向滚动菜单 -->
<template>
  <section>
    <header class="title-box">
      <span class="title">{{title}}</span>
      <span>
        <router-link class="more-href" :to="{}">更多</router-link>
      </span>
    </header>
    <!-- 豆瓣纸书下的着重显示 -->
    <slot name="firstShow"></slot>
    <!-- 标签模式 -->
    <div v-if="model === 'tag'">
      <ul class="tag-box">
        <li v-for="item in items" :key="item.title">
          <a :href="item.href" class="tag-href" :style="{ color: item.color }">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <!-- 图片模式 -->
    <div v-else class="section-box">
      <div class="section" v-for="item in items" :key="item.id">
        <router-link :to="{}">
          <div class="action-img">
            <img :src="item.image" alt="">
          </div>
          <div class="works-title">{{item.title}}</div>
          <rating :score="item.score"></rating>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Rating from '../components/Rating'
export default {
  name: 'ScrollList',
  props: ['title', 'model', 'items'],
  components: { Rating }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  $h: 2.8rem;
  .title-box{
    font-size:  1.1rem;
    padding-right: 0.8rem;
    display: flex;
    justify-content: space-between;
  }
  .action-img{
    height: 11.9rem;
  }
  .title{
    height: $h;
    line-height: $h;
  }
  .more-href{
    color: $com-color;
    height: $h;
    line-height: $h;
    font-size:  1rem;
  }
  .section-box{
    display: flex;
    padding: 0.4rem 0 1rem;
    overflow: auto;
    -webkit-overflow-scrolling:touch;
  }
  .section{
    margin-right: 0.3rem;
    flex: 0 0 7.9rem;
  }
  .works-title{
    color: #000;
    font-size: 1rem;
    text-align: center;
    $h: 2.3rem;
    height: $h;
    line-height: $h + 0.4;
  }
  .tag-box{
    display: flex;
    overflow: auto;
    li{
      margin-right: 1.4rem;
      flex: 0 0 auto;
    }
  }
  .tag-href{
    border: 1px solid rgb(255, 172, 45);
    border-radius: 7px;
    color: rgb(255, 64, 85);
    font-size: 1rem;
    $h: 3.8rem;
    display: block;
    height: $h;
    line-height: $h;
    padding: 0 1.5rem;
  }
</style>
