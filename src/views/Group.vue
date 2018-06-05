
<!-- 小组页 -->
<template>
  <div>
    <check-login></check-login>
    <com-footer></com-footer>
  </div>
</template>

<script>
import CheckLogin from '../components/CheckLogin'
import ComFooter from '../components/ComFooter'
export default {
  name: 'Group',
  components: { CheckLogin, ComFooter }
}
</script>

<style scoped lang="scss" type="text/scss">

</style>
