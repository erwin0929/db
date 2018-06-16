
<template>
  <div>
    <input type="checkbox" checked v-model="p">123
  </div>
</template>

<script>
export default {
  name: 'Zzz',
  props: ['value'],
  data () {
    return {
      p: false
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss" type="text/scss">

</style>
