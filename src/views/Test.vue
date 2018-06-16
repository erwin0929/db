
<!-- 测试页 -->
<template>
  <div class="test-page">
    <div class="bor">
      <span @click="abc">点击我吧!</span>
    </div>
    <router-view class="bor"></router-view>
    <router-view class="bor" name="A"></router-view>
    <router-view class="bor" name="B"></router-view>
    1. active-class是 router-link标签的属性,其作用是:为当前链接匹配的a标签添加一个class,以作高亮,也可以使用linkActiveClass配置不同的class
    2. 嵌套路由的2个关键字是 router-view和children,在配置文件中定义一个children属性,值为数组,该数组可以包含n多个对象。
    添加属性:path, component, name。当匹配到path则会将component下的组件显示在router-view中,children中还能再包含children。
    3. 在path属性里以`abc/:id`的形式添加,当匹配到`abc/23,abc/4554`的时候才会在路由出口里显示相应的组件,当一个页面根据用户ID读取不同的数据常会用到。
    所有的动态参数都会存放在$route.params中。
    4. v-model="test"是 :value="test" @input="$event.target.test"的语法糖,它会监听用户的实时输入,从而实现双向绑定。
    v-on:click="event" 或 @click="event" 事件也有诸多修饰符 @click.stop.prevent="event" 阻止传播,阻止事件默认行为
    @keyup.enter="abc"
    5. v-if 根据值决定是否渲染, v-show,根据值决定是否显示,v-for 根据给定的数组或对象或数值循环渲染,v-bind:class 为某个属性绑定一个值
    6. 利用了Object.definedproprety来劫持属性的setter和getter
    <br>
    <br>
    <br>
    <br>
    <Zzz v-model="search"></Zzz>
    <input type="text" @keyup.enter="uuu">
  </div>
</template>

<script>
import Zzz from './Zzz'
export default {
  name: 'Test',
  data () {
    return {
      value: '测试数据',
      search: 'Midnight'
    }
  },
  components: { Zzz },
  methods: {
    abc () {
      this.$router.push({
        name: 'Ca',
        params: {
          username: 'wocao',
          id: 131230001
        }
      })
    },
    uuu () {
      alert(123)
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    console.log(from)
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .bor{
    border: 1px solid red;
    margin: 2rem 0;
  }
</style>
