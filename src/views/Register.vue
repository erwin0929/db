
<!-- 注册页 -->
<template>
  <div class="register-page">
    <div class="title-box">欢迎加入豆瓣</div>
    <login-input v-bind="notice"></login-input>
    <div class="green">点击「注册」代表你已阅读并同意用户使用协议</div>
    <div class="download">下载豆瓣App</div>
  </div>
</template>

<script>
import LoginInput from '../components/LoginInput'
export default {
  name: 'Register',
  components: { LoginInput },
  data () {
    return {
      notice: {
        subEmail: '请输入邮箱',
        subPwd: '请输入密码',
        subButton: '立即注册',
        subUsername: '请输入用户名'
      }
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .register-page{
    display: flex;
    flex-direction: column;
  }
  .title-box{
    color: $com-color;
    font-size:  2.5rem;
    text-align: center;
    $h: 7rem;
    font-weight: 300;
    margin: 3.1rem 0;
  }
  .green{
    font-size: 0.9rem;
    color: #aaa;
    text-align: center;
    margin: 1.5rem 0 3rem;
  }
  .download{
    color: $com-color;
    text-align: center;
  }
</style>
