
<!-- 搜索弹出层 -->
<template>
  <div class="talion-view">
    <!-- 搜索框 -->
    <div class="sch-box">
      <span class="close-talion" @click="closeTalion">关闭</span>
      <form class="form-box">
        <input type="search">
      </form>
    </div>
    <!-- 导航列表 -->
    <nav class="nav-box">
      <ul class="nav-sub">
        <li class="nav-li" v-for="item in navType" :key="item.id">
          <div class="f-title" :style="{color: item.color}">{{item.title}}</div>
          <div class="s-title">{{item.intro}}</div>
        </li>
      </ul>
    </nav>
    <!-- 站内链接 -->
    <div class="link-box">
      <ul class="link-list">
        <li class="link-li">
          <router-link :to="{ name: 'Register' }" class="l-txt">注册账号</router-link>
        </li>
        <li class="link-li">
          <router-link :to="{ name: 'Login' }" class="l-txt">登录豆瓣</router-link>
        </li>
      </ul>
      <ul class="link-list">
        <li class="link-li">
          <router-link :to="{}" class="l-txt">使用桌面版</router-link>
        </li>
        <li class="link-li">
          <router-link :to="{}" class="l-txt">使用豆瓣App</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Talion',
  computed: {
    ...mapState({
      navType: state => state.talion.navType
    })
  },
  methods: {
    closeTalion () {
      this.$emit('closeTalion')
    },
    ...mapActions([
      'getData'
    ])
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .close-talion{
    color: $com-color;
    margin-right: 0.8rem;
  }
  .sch-box{
    border: {
      bottom: 1px solid #f3f3f3;
    }
    display: flex;
    height: 3.7rem;
    padding: 0 1.5rem;
    align-items: center;
  }
  .form-box{
    flex: 1;
    input{
      border-radius: 4px;
      padding: 0.3rem 0.4rem;
      height: 2.2rem;
      background: url("#{$img-path}sch.png") no-repeat center #f3f3f3;
      background-size: 1.2rem;
    }
  }
  .talion-view{
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  input[type=search]{
    &::-webkit-search-cancel-button{
      -webkit-appearance: none;//此处只是去掉默认的小×
    }
    // 骚操作
    &:focus{
      background: #f3f3f3;
    }
  }
  .nav-box{
    padding: 0 1.9rem 0 7rem;
  }
  .nav-sub{
    margin: 2.4rem 0;
    display: flex;
    justify-content: space-between;
  }
  .nav-li{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .f-title{
    font-size: 1.45rem;
    margin-bottom: 0.2rem;
  }
  .s-title{
    color: #999;
    font-size: 0.8rem;
  }
  .link-box{
    padding-left: 2.8rem;
  }
  .link-list{
    $bor: #f3f3f3;
    border-bottom: 1px solid $bor;
    display: flex;
    $h: 3.3rem;
    &:first-child{
      border-top: 1px solid $bor;
    }
    .link-li{
      height: $h;
      flex: 1;
      display: flex;
      align-items: center;
    }
    .l-txt{
      color: $com-color;
      text-align: center;
      flex: 1;
      &:first-child{
        border-right: 1px solid #e5e5e5;
      }
    }
  }
</style>
