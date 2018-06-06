
<!-- 图书页 -->
<template>
  <div class="book-page">
    <scroll-list :title="title.fic" :items="fic"></scroll-list>
    <scroll-list :title="title.noFic" :items="noFic"></scroll-list>
    <scroll-list :title="title.paperBook" :items="paperBook">
      <div slot="firstShow" class="first-show">
        <div class="img-box">
          <img :src="paperFirstShow.image">
        </div>
        <div class="img-r">
          <div class="b-title">
            <span class="t-txt">{{paperFirstShow.title}}</span>
            <span class="price">{{paperFirstShow.price}}</span>
          </div>
          <div class="intro">{{paperFirstShow.intro}}</div>
        </div>
      </div>
    </scroll-list>
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
        find: '发现好书',
        paperBook: '豆瓣纸书'
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
      paperBook: state => state.book.paperBook,
      paperFirstShow: state => state.book.paperFirstShow,
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
  .first-show{
    display: flex;
    padding: {
      bottom: 0.3rem;
    }
  }
  .b-title{
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .img-box{
    width: 7.5rem;
    height: 10rem;
    margin-right: 1rem;
  }
  .img-r{
    flex: 0 1 60%;
  }
  .t-txt{
    color: #494949;
    font-size: 1.3rem;
  }
  .intro{
    font-size: 0.75rem;
    color: #9b9b9b;
    line-height: 2rem;
    font-weight: 300;
  }
  .price{
    color: #e76648;
    font-size: 0.9rem;
    line-height: normal;
  }
</style>
