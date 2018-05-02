
<!-- 评分 -->
<template>
  <div class="star-parent">
    <div class="star-box">
      <template v-for="n in full">
        <span class="star star-full" :key="n"></span>
      </template>
      <template v-for="n in half">
        <span class="star star-half"></span>
      </template>
      <template v-for="n in gray">
        <span class="star star-gray"></span>
      </template>
    </div>
    <span>{{score}}</span>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['score'],
  data () {
    return {
      full: 0,
      half: 0,
      gray: 0
    }
  },
  mounted () {
    this.full = parseInt(this.score / 2)
    this.half = this.score % 2 === 0 ? 0 : 1
    this.gray = 5 - this.full - this.half
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .star-parent{
    color: #000;
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
  $star-list:
    star-full,
    star-half,
    star-gray;
  @each $v in $star-list{
    .#{$v}{
      background-image: url("#{$img-path}#{$v}.png");
    }
  }
</style>
