
<!-- 组件: 评论 -->
<template>
  <div>
    <div>
      <div class="sub-box" v-for="item in list" :key="item.id">
        <div class="head-img"><img src="../assets/status/douban.png"></div>
        <div class="cont-box">
          <div>
            <span class="write">
              <i class="arthor">{{item.name}}</i>写了日记
            </span>
          </div>
          <div class="date">{{item.dateTime}}</div>
          <div class="detail-box">
            <h2 class="update">{{item.title}}</h2>
            <article class="graph-txt">- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</article>
          </div>
          <div class="icon-box">
            <div class="small-box">
              <span class="sub-box1">
                <i class="like"></i>
                <span>{{item.like}}</span>
              </span>
              <span class="sub-box1">
                <i class="commet"></i>
                <span>{{item.commet}}</span>
              </span>
              <span class="sub-box1">
                <i class="retweet"></i>
                <span>{{item.retweet}}</span>
              </span>
            </div>
            <div class="inter">
              <i class="more"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="link">
      <router-link :to="{}">显示更多广播</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Issues',
  computed: {
    abc () {
      return 123
    },
    ...mapState({
      list: state => state.status.list
    })
  },
  methods: {
    // this.getData 映射为 this.$store.dispatch('getData')
    // 即调用getData则分发actions
    ...mapActions([
      'getData'
    ])
  },
  mounted () {
    // 打开此页立即调用getData方法
    this.getData()
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .sub-box{
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #e8e8e8;
    color: #aaa;
    padding: 1.5rem 0 1.3rem;
  }
  .icon-box{
    display: flex;
    justify-content: space-between;
  }
  .sub-box1{
    margin-right: 2rem;
    display: flex;
    align-items: center;
  }
  .inter{
    display: flex;
  }
  $icon-list: commet, like, retweet, more;
  $size: 1.6rem;
  @each $item in $icon-list{
    .#{$item}{
      width: $size;
      height: $size;
      background: url("#{$img-path}status/#{$item}.svg") no-repeat center;
      background-size: contain;
    }
  }
  .small-box{
    display: flex;
  }
  .write{
    height: 1.8rem;
    line-height: 2.4rem;
    display: block;
  }
  .head-img{
    width: 3rem;
    margin-right: 0.9rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .cont-box{
    flex: 1;
  }
  .arthor{
    color: #494949;
    font-style: normal;
    font-weight: 700;
  }
  .graph-txt{
    font-size: 0.7rem;
    line-height: 1.2rem;
  }
  .update{
    color: #000;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .date{
    $h: 1.8rem;
    font-size: 0.8rem;
    height: $h + 0.3;
    line-height: $h;
  }
  .detail-box{
    border: 1px solid #d8d8d8;
    padding: 1.5rem;
    border-radius: 5px;
    margin-bottom: 1.4rem;
  }
  .link{
    $h: 4rem;
    text-align: center;
    height: $h;
    line-height: $h;
    a{
      color: $com-color;
    }
  }
</style>
