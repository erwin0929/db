
<!-- 小组页 -->
<template>
  <div>
    <check-login></check-login>
    <div>
      <div class="list-box">
        <h2 class="title">租房找室友</h2>
        <div>
          <div class="list-sub">
            <div class="content-box">
              <img class="c-img" src="../assets/group/g117205-2.jpg">
              <span class="cont-title">成都租房</span>
              <span class="count">20005人</span>
            </div>
            <div class="intro">
              <span>3天前更新:</span>
              <span class="more">天府四街临江苑套一出租个人 无中介费噢</span>
            </div>
          </div>
          <div class="list-sub">
            <div class="content-box">
              <img class="c-img" src="../assets/group/g279962-3.jpg">
              <span class="cont-title">北京租房（非中介）</span>
              <span class="count">20005人</span>
            </div>
            <div class="intro">
              <span>刚刚更新:</span>
              <span class="more">9号线丰台南路站看丹桥新华街四里，次卧出租，押一付一</span>
            </div>
          </div>
          <div class="list-sub">
            <div class="content-box">
              <img class="c-img" src="../assets/group/g117205-2.jpg">
              <span class="cont-title">深圳福田租房（个人房源免费推广）</span>
              <span class="count">20005人</span>
            </div>
            <div class="intro">
              <span>刚刚更新:</span>
              <span class="more">福田福民岗厦复式单间整租，2800，可短租</span>
            </div>
          </div>
        </div>
        <div class="link">
          <router-link :to="{}">更多相关小组</router-link>
        </div>
      </div>
      <div class="list-box">
        <h2 class="title">来聊五块钱</h2>
        <div>
          <div class="list-sub">
            <div class="content-box">
              <img class="c-img" src="../assets/group/g14859-17.jpg">
              <span class="cont-title">想不想很多人帮你！</span>
              <span class="count">20005人</span>
            </div>
            <div class="intro">
              <span>3天前更新:</span>
              <span class="more">天府四街临江苑套一出租个人 无中介费噢</span>
            </div>
          </div>
          <div class="list-sub">
            <div class="content-box">
              <img class="c-img" src="../assets/group/g279962-3.jpg">
              <span class="cont-title">我们都有秘密</span>
              <span class="count">20005人</span>
            </div>
            <div class="intro">
              <span>刚刚更新:</span>
              <span class="more">9号线丰台南路站看丹桥新华街四里，次卧出租，押一付一</span>
            </div>
          </div>
          <div class="list-sub">
            <div class="content-box">
              <img class="c-img" src="../assets/group/g17947-8.jpg">
              <span class="cont-title">文艺青年装逼会</span>
              <span class="count">20005人</span>
            </div>
            <div class="intro">
              <span>刚刚更新:</span>
              <span class="more">福田福民岗厦复式单间整租，2800，可短租</span>
            </div>
          </div>
        </div>
        <div class="link">
          <router-link :to="{}">来聊五块钱</router-link>
        </div>
      </div>
    </div>
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
  @import '../sass/config';
  $fz: 1.1rem;
  .title{
    font-size: $fz;
    font-weight: normal;
    padding: 1rem 0 0.3rem;
  }
  .link{
    $h: 4rem;
    text-align: center;
    height: $h;
    line-height: $h;
    a{
      color: $com-color;
    }
  }
  .more{
    margin-left: 0.5rem;
  }
  .list-box{
    padding-left: 1rem;
  }
  .list-sub{
    border-bottom: 1px solid #f2f2f2;
    padding: {
      bottom: 1.2rem;
      right: 1rem;
      top: 1rem;
    }
  }
  .c-img{
    flex: 0 1 5%;
    margin: {
      right: 10px;
    }
  }
  .intro{
    color: #aaa;
    font-size: 0.9rem;
    padding-top: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content-box{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cont-title{
    font-size: $fz;
    flex: 1;
  }
  .count{
    color: #ccc;
  }
</style>
