
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/scss">
  *{
    box-sizing: border-box;
  }
  #app{
    max-width: 420px;
    margin: 0 auto;
  }
  input{
    border: none;
    width: 100%;
    display: block;
    outline: none;
  }
  ul,
  li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a{
    width: 100%;
    display: block;
    text-decoration: none;
  }
  img{
    width: 100%;
    display: block;
  }
  h2{
    margin: 0;
    padding: 0;
  }
</style>
