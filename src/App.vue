
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
  }
</style>
