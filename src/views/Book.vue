
<!-- 图书页 -->
<template>
  <div class="book-page">
    <scroll-list :title="title.fic" :items="fic"></scroll-list>
    <scroll-list :title="title.noFic" :items="noFic"></scroll-list>
    <scroll-list :title="title.find" :items="find" :model="showModel"></scroll-list>
    <!-- 分类浏览 -->
    <type-browse :type="type"></type-browse>
    <!-- 底部 -->
    <com-footer></com-footer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ScrollList from '../components/ScrollList'
import TypeBrowse from '../components/TypeBrowse'
import ComFooter from '../components/ComFooter'
export default {
  name: 'Book',
  components: { ScrollList, TypeBrowse, ComFooter },
  data () {
    return {
      title: {
        fic: '最受关注图书 | 虚构类',
        noFic: '最受关注图书 | 非虚构类',
        find: '发现好书'
      },
      showModel: 'tag'
    }
  },
  methods: {
    ...mapActions([
      'getBook'
    ])
  },
  computed: {
    ...mapState({
      fic: state => state.book.fic,
      noFic: state => state.book.noFic,
      find: state => state.book.find,
      type: state => state.book.type
    })
  },
  mounted () {
    this.getBook()
    console.log(this)
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
  @import "../sass/common";
</style>
