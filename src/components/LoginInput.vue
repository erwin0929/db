
<!-- 供登录注册页的输入框组件 -->
<template>
  <div class="inp-box">
    <div class="sub-box">
      <input type="text" v-model="email" name="email" :placeholder="subEmail">
    </div>
    <div class="sub-box pwd-box">
      <input :type="type[+isShow]" v-model="pwd" name="password" :placeholder="subPwd">
      <!-- 切换active -->
      <i class="show-pwd" :class="{active : isShow}" @click="subShowPwd"></i>
    </div>
    <template v-if="subUsername">
      <div class="sub-box">
        <input type="text" v-model="username" name="username" :placeholder="subUsername">
      </div>
    </template>
    <div class="login-btn">
      <button>{{subButton}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginInput',
  props: ['subButton', 'subEmail', 'subPwd', 'subUsername'],
  data () {
    return {
      isShow: false,
      email: '',
      pwd: '',
      username: '',
      type: ['password', 'text']
    }
  },
  methods: {
    subShowPwd () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  .inp-box{
  }
  $inp-h: 3rem;
  $radius: 4px;
  .sub-box{
    border: 1px solid #ccc;
    border-radius: $radius;
    input{
      border-radius: $radius;
      padding: 0.4rem 1.1rem;
      width: 100%;
      display: block;
    }
    &.pwd-box{
      display: flex;
      input{
        flex: 1;
      }
    }
  }
  .show-pwd{
    background-image: url("#{$img-path}show0.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1.8rem;
    flex: 0 1 3rem;
    &.active{
      background-image: url("#{$img-path}show1.png");
    }
  }
  .login-btn{
    color: #fff;
    border-radius: 4px;
    margin: 1.2rem 0 0;
    background-color: #17aa52;
    text-align: center;
    button{
      width: 100%;
      color: #fff;
      height: $inp-h;
      line-height: $inp-h;
    }
  }
  input{
    color: gray;
    font-size: 1rem;
    height: $inp-h;
    line-height: $inp-h;
    outline: none;
  }
</style>
