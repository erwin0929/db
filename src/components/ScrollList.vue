
<!-- 横向滚动菜单 -->
<template>
  <div>
    <div class="title-box">
      <span class="title">{{title}}</span>
      <span>
        <router-link class="more-href" :to="{}">更多</router-link>
      </span>
    </div>
    <div v-if="model === 'tag'" class="find-box">
      <ul class="tag-box">
        <li>
          <router-link :to="{}" class="tag-href">同时入选IMDB250和豆瓣电影250的电影</router-link>
        </li>
        <li>
          <router-link :to="{}" class="tag-href">带你进入不正常的世界</router-link>
        </li>
        <li>
          <router-link :to="{}" class="tag-href">用电【影】来祭奠逝去的岁月</router-link>
        </li>
        <li>
          <router-link :to="{}" class="tag-href">女孩们的故事【电影】</router-link>
        </li>
      </ul>
    </div>
    <div v-else class="section-box">
      <div class="section">
        <div class="action-img">
          <img src="../assets/action01.jpg" alt="">
        </div>
        <div class="works-title">狂暴巨兽</div>
        <div class="star-parent">
          <div class="star-box">
            <span class="star star-full"></span>
            <span class="star star-half"></span>
            <span class="star star-gray"></span>
            <span class="star star-gray"></span>
            <span class="star star-gray"></span>
          </div>
          <span>6.7</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollList',
  props: ['title', 'model']
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  $h: 2.8rem;
  .title-box{
    font-size:  1.1rem;
    padding: 0 0.8rem;
    display: flex;
    justify-content: space-between;
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
    margin: 0 0.3rem;
    flex: 0 0 7.9rem;
  }
  .works-title{
    font-size: 1rem;
    text-align: center;
    $h: 2.3rem;
    height: $h;
    line-height: $h + 0.4;
  }
  .star-parent{
    display: flex;
  }
  .star-box{
    flex: 0 1 75.5%;
    display: flex;
  }
  .star{
    width: 1rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .find-box{
    padding-bottom: 3rem;
  }
  @each $v in star-full,star-half,star-gray{
    .#{$v}{
      background-image: url("#{$img-path}#{$v}.png");
    }
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
