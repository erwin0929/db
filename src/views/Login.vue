
<!-- 登录页 -->
<template>
  <div class="login-page">
    <div class="title-box">登录豆瓣</div>
    <div class="cancel">取消</div>
    <login-input v-bind="notice" @showPwd="showPwd"></login-input>
    <div>
      <div class="other-login">使用其他方式登录 & 找回密码</div>
      <div class="href">
        <router-link :to="{name:'Register'}" tag="span">注册豆瓣账号</router-link>
        <span>下载豆瓣App</span>
      </div>
    </div>
  </div>
</template>

<script>
import LoginInput from '../components/LoginInput'
export default {
  name: 'Login',
  components: { LoginInput },
  data () {
    return {
      notice: {
        subEmail: '请输入邮箱',
        subPwd: '请输入密码',
        subButton: '登录'
      }
    }
  },
  methods: {
    showPwd () {
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .login-page{
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .title-box{
    border-bottom: 1px solid #eee;
    font-size:  1.2rem;
    $h: 3.4rem;
    height: $h;
    line-height: $h;
    margin-bottom: 1.5rem;
    text-align: center;
    font-weight: bold;
  }
  .cancel{
    color: $com-color;
    white-space: nowrap;
    position: absolute;
    left: 1.5rem;
    top: 1.1rem;
  }
  .other-login{
    color: #aaa;
    $h: 5.7rem;
    height: $h;
    line-height: $h - 1.6;
    text-align: center;
  }
  .href{
    color: $com-color;
    display: flex;
    justify-content: center;
    & > span:first-child{
      margin-right: 1rem;
    }
  }
</style>
