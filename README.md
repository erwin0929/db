## 简易豆瓣手机页,仿写、改写

> 目录结构如下
```
├─ build 打包设置
├─ config 发布设置
├─ src
│  ├─ assets 图片
│  ├─ components 组件目录
│  ├─ mock 生成随机数据
│  ├─ router 路由配置
│  ├─ sass 公共样式
│  ├─ store 状态管理
│  │  ├─ modules 使用modules来管理store
│  │  └─ index.js
│  ├─ views 页面目录
│  ├─ App.vue
│  └─ main.js 入口文件
├─ static
│  └─ .gitkeep
├─ .babelrc
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .postcssrc.js
├─ README.md
├─ index.html
└─ package.json
```
## 技术栈
* [Webpack](https://webpack.js.org)
* [Vue](http://vuejs.org)
* [Vuex](https://vuex.vuejs.org)
* [Vue-Router](https://router.vuejs.org/zh/)
* [Mock](http://mockjs.com)
* [Axios](https://github.com/axios/axios)
* [Es6](http://es6.ruanyifeng.com)
* [Sass](https://www.sass.hk)

## 自我小结
* 本文会逐个介绍每个目录下的文件及其作用,以及我的心得和体会,累积的经验。  
* 本项目基于webpack,固使用的是`.vue`单文件组件开发。
* 在撰写的过程中也是对知识点的巩固,打好基础的同时将这些要点扎根在自己的大脑里,本篇纯手写,绝无ctrl+c官方Api,复制率被控制在3%以下。  
* 另说明,本人对知识点的汲取大多源自于官方文档,本文一定程度上借鉴了官方文档,同时也加入了自己的想法和结合自己的理解。编码过程中于英文逗号已成习惯,如果造成阅读不适,请谅解。

> OK,想了解vue,我们先移步`src`目录  

> main.js   

安装不再赘述,本文将对我的文档结构以我的个人认知进行剖析。  
那么直接进入入口文件`main.js`开始介绍。  
```
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
```  
以上导入了`vue`库,页面入口文件`App.vue`, 路由配置文件`router`, `vuex`配置文件`store`和样式初始化文件`normalize.css`。  
初始化实例,并将使用的模板文件`App`,路由文件和vuex配置文件注入到实例中,最后将实例手动挂载到`#app`元素上。  
顺带一提,这里使用`$mount('#app')`和`el: '#app'`皆可,只不过`$mount`支持延迟挂载。  

> App.vue  

```
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
```
* 这是一个根组件,所有页面都在该页面下切换,所有组件都是它的子组件。
* `vue`实例将被挂载到该`div#app`上  
* `<router-view></router-view>` 这是`vue-router`提供的标签,下面会介绍,这里可以暂且理解为存放页面的容器,所有的页面都会显示在该标签中。
```
export default {
  name: 'App' 这里的name可作为唯一标识,等同于ID,并且有名字的组件有更好的警告信息  
}
```  
* 这里的`style`标签中是全局样式,任何组件都能享用到该样式,那么很明显,这是重置各浏览器的不同表现。  
注意这里使用了`sass`,官方默认是没有安装的,需自行安装,后面会介绍。 

> views目录及组件 (props,events,slot)
* 此章节将剖析组件和页面结构。
* 该目录下存放了各种页面,而这些页面文件可能还会包含子组件,子组件又能再包含子组件。举例一个来说:  
```

<!-- 电影页 -->
<template>
  <div class="movie-page">
    <scroll-list :title="title.movieTitle" :items="hotMovie"></scroll-list>
    <scroll-list :title="title.onlineTitle" :items="onlineMovies"></scroll-list>
    <scroll-list :title="title.newMovieTitle" :items="newMovies"></scroll-list>
    <scroll-list :title="title.findTitle" :items="findMovie" :model="showModel"></scroll-list>
    <!-- 分类浏览 -->
    <type-browse :type="type"></type-browse>
    <!-- 底部 -->
    <com-footer></com-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ScrollList from '../components/ScrollList'
import ComFooter from '../components/ComFooter'
import TypeBrowse from '../components/TypeBrowse'
export default {
  name: 'Movie',
  components: { ScrollList, ComFooter, TypeBrowse },
  data () {
    return {
      title: {
        movieTitle: '影院热映',
        onlineTitle: '免费在线观影',
        newMovieTitle: '新片速递',
        findTitle: '发现好电影'
      },
      showModel: 'tag'
    }
  },
  methods: {
    ...mapActions([
      'getMovie'
    ])
  },
  computed: {
    ...mapState({
      hotMovie: state => state.movie.hotMovie,
      onlineMovies: state => state.movie.onlineMovies,
      newMovies: state => state.movie.newMovies,
      findMovie: state => state.movie.findMovie,
      type: state => state.movie.type
    })
  },
  mounted () {
    this.getMovie()
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "../sass/config";
</style>
```

* 电影页有诸多个列表形成的,而这些列表往往样式和布局相同,何不把他们封装为组件,在有需要时调用它。  
* 这里我们引入组件的概念。组件的使用非常简单,我们将某个组件放入`components`目录中,命名为`ScrollList.vue`。  
调用方式 `import ScrollList from 'ScrollList'` , 将引入的`ScrollList`添加至`components`属性中以完成注册。这是局部注册。
使用时根据其名小写添加中划线`<scroll-list>`完成调用。
* 全局注册,可在入口文件使用`Vue.component('scroll-list',ScrollList)`来完成注册,并添加至选项对象的`components`属性中,那么子组件都可以使用该组件了。
* 大多数情况下,我们要往组件里传递不同的数据,可以使用`v-bind='data'`,而接收方会用到`props`属性,该属性允许父组件传值于子组件,子组件的`data`必须是函数。  
* `props`使用要点: 
1. 该属性可以要求传值为某一类型,此时必须以对象形式列出。
2. 支持静态和动态值。
3. 单向通信方式,父级传递的值会流动到子组件,但是该行为不可逆,这样做事为了防止子组件意外更改父组件的值,导致数据流难以理解。
4. 父组件更新时,子组件也会随之更新,这就意味着,不应更改子组件的值,否则将会发出warning。
* 子组件使用`$emit`向父组件传值,该方法接受2个参数,第一个是监听器名,第二个是子组件向父组件传的参数。
* `slot`插槽会替换组件标签里的内容,当多处使用一个组件时,某一个组件下要添加一张图片或一段文字,那么此时`slot`变得非常有用。  
* 有时我们要用到多个插槽,可以使用具名插槽。 `slot='home'` 与 `<slot name='home'></slot>` 形成替换,如果没有找到对应的name值,则不做替换。
* 也可以保留一个未命名的插槽用作默认显示。
* 可以在实例中找到插槽,访问方式: `vm.$slots`。
* 作用域插槽`slot-scope`待研究。
* 父子组件间的访问还可以使用 `$root`, `$parent`, `$children`这些属性来访问,不过这些属性使用起来会不利于维护。
* `$ref` 可以访问指定的子组件?待研究。
* 所了解的组件至此,当然还有很多高阶用法待我去深入研究。  
* `methods`,`computed`, `watch`, 某些时候我们要对数据进行一些计算,虽然模板表达式也能解决一时之需,但随着项目的越发壮大,维护成本就变得越高,  
那么此时可以定义一个函数作为`computed`的一个方法,当需要时调用该方法即可。  
`methods`对象与`computed`类似,也能定义方法供需要时使用,但不同的是计算属性会在相关依赖更新时会重新计算,这就意味着及时多次访问都会立即返回执行结果,而不是再次执行  
因为它会缓存执行结果。 `watch` 也是监听数据变化,用的较少了解不多。  

> Class与Style绑定

```
<template>
  <div class="inp-box">
    <div class="sub-box">
      <input type="text" v-model="email" name="email" :placeholder="subEmail">
    </div>
    <div class="sub-box pwd-box">
      <input :type="type[+isShow]" v-model="pwd" name="password" :placeholder="subPwd">
      <!-- 切换active -->
      <i class="show-pwd" :class="{active : isShow}" @click="subShowPwd"></i>
      <span :class="[success, notice]"></span>
    </div>
    <template v-if="subUsername == 1">
      <div class="sub-box">
        <input type="text" :style="subUsername" v-model="username" name="username" :placeholder="subUsername">
      </div>
    </template>
    <template v-else-if="subUsername == 2">
      <div class="sub-box">
        <h2>请登录</h2>
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
      type: ['password', 'text'],
      success: 'success',
      notice: 'notice',
      subUsername: {
        color: '#494949',
        fontSize: '0.9rem',
        flex: '1'
      }
    }
  },
  methods: {
    subShowPwd () {
      this.isShow = !this.isShow
    }
  }
}
</script>
```

* 上述代码为项目中的片段截取,可见`v-bind:class`与`v-bind:style`都有2中传参方式,1是对象2是数组。
* 对象写法如同逻辑表达,当值为`true`时,属性值便会当做class。
* 数组写法会将数组内的所有值当做class。
* 数组内也能嵌套对象写法。
* `v-bind:style` 也是同理。
* 该语法较简单,不做更多深入。
* 条件渲染的语法为`v-if` ,`v-else`必须紧跟在`v-if`或`v-else-if`的后面。与条件语句相同,当某一段if为真那么进入该代码段,不再进入其他if语句中。
* `v-if`与`v-show`不同的是,`v-show`不论值的真假,总是会被渲染,该属性决定元素的`display`状态。反之`v-if`只有为真时才会被渲染。
* `v-if`有较高的切换开销,`v-show`有较高的初始渲染开销,因此,当某个元素需要频繁显示和隐藏,则推荐使用`v-show`。当某个元素运行时很少或几乎不改变显示与否,  
则使用`v-if`。

> 列表循环 

```
<!-- 头部导航 -->
<template>
  <header class="header">
    <span class="logo-txt">
      <router-link :to="{name: 'Home'}">豆瓣</router-link>
    </span>
    <ul class="nav">
      <li class="nav-section" v-for="item in $router.options.routes[0].children" :key="item.path" v-if="item.cname">
        <router-link class="nav-href" :to="item">{{item.cname}}</router-link>
      </li>
    </ul>
    <span class="search" @click="openTalion($event)"></span>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    openTalion () {
      this.$emit('openTalion')
    }
  },
  mounted () {
  }
}
</script>
```

* `v-for`的基本参数是2个,第一个参数为value,第二个则是数组或对象。`v-if`与`v-for`可以同时使用,但`v-if`拥有更高的优先级。
* `v-for`也可以加入`index`来获取索引值,`<div v-for="(value, index) in array">` 
* `:key`的出现使得Vue能跟踪每个节点,从而重用和排序现有元素以及移除`key`不存在的元素,`key`值是一个唯一标识,每项都应有一个`key`值。
* 对数据进行更改,我们会用到数组函数,以下数组函数会原数组,,所以会触发视图更新。
1. `push()`
2. `pop()`
3. `shift()`
4. `unshift()`
5. `splice()`
6. `sort()`
7. `reverse()`
* 而`filter()`, `concat()`, `slice()` 这些方法不会改变原来数组,所以不会触发视图更新,想要实现,只需将返回的数组替换掉旧数组即可。
* 某些添加属性的方式是无法延续响应式的
1. 用索引设置一个值。
2. 修改数组的长度。
* 该方法虽然使`data`中的数据变动了,但失去了响应式的功能。如果想要实现,可以使用全局方法`set`,亦或者实例方法`$set`。
* 当添加多个对象时,可以使用Es6提供的对象合并方法`Object.assign()`。
* 因为Vue的双向绑定特性,用户在视图上的修改会同步到数据模型里,反之亦然。比如用户输入的账号密码,我们不用任何操作,就将数据存放到了数据模型里,  
而这种机制的实现方法主要用到了`Object.defineProperty()`来劫持各个属性的`setter`，`getter`,目前不是很了解,以后会深入研究。
* 事件监听可以使用`@click`的方式(`v-on:click`的语法糖),如果想要获取事件对象可添加参数`@click="showTime($event)"`。
* 以下为事件修饰符
1. `.stop`
2. `.prevent`
3. `.capture`
4. `.self`
5. `.once`
6. `.passive`
7. `.once`
* 紧跟在click之后,`stop`阻止事件传播, `prevent`阻止浏览器默认行为,`once`事件只触发一次
* 键盘捕获
1. `.enter`
2. `.tab`
3. `.delete`
4. `.esc`
* 还有鼠标事件不一一列举了,使用时我会看官方文档,毕竟我写的是总结,不是Api。

> 表单输入绑定  

* 关键字`v-model`, 最经典的双向绑定,负责监听用户的输入事件。它是某种语法糖,如下:  
`:value='随便写一点呢!' @input='value = $event.target.value'`。
* 当然也能在组件中使用,这是父组件`<scroll_list v-model="search"></scroll_list>`,子组件`<input type="text" :value="value" @input="$emit('input',$event.target.value)">`  
父组件将search变量传入子组件,子组件使用`props:['value']`接受并写入在`input`标签上。当该表单被编辑,触发`input`监听器,并将输入的内容传入。此时父组件接收到传值,将该值赋给`search`。
* 一旦设置了`v-model`,则会忽略表单元素的`checked`,`selected`,`value`。
* `v-model`也包含了修饰符,`.lazy`转变事件为`change`而不再是`input`。`.number`将用户输入转为数值类型。`.trim`过滤首尾空白。
* 更多表单操作使用时会翻阅官方文档,本篇不做一一列举。

> 动画 & 过度

* 本章没有观看,在后期会补充。

> 生命周期钩子

* 再次声明,本篇绝无ctrl+c官方Api,即使内容相同也是在理解的情况下,手工键入。
* 我认为生命周期是比较重要的概念,它可以帮助理解实例化期间内部做了什么事。
* 所有生命周期的钩子将`this`指向了当前实例,所以不能使用继承父级的箭头函数,否则this的值会与预期的不同。
* 生命周期钩子可以在某个阶段给予一个做某些处理的机会。
* 共有8个阶段:实例创建前后,挂载前后,更新前后,销毁前后。
1. `beforeCreate`, 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用(不是很明白)。这个时候,`this`还不能使用  
data,methods,watcher下的属性和方法都不能被使用。(可以做loading动画)
2. `created`,实例创建完成后被调用,数据观测,属性和方法的运算,watch/event事件回调已完成,挂载还未开始,所以`$el`属性不可见,还不能进行dom操作。(可以进行异步请求)
3. `beforeMount`, 挂载之前调用, 触发render函数。
4. `mounted`, $el替换el,挂载到实例上之后开始调用,dom操作可以执行(只能暂时理解这么多)。
5. `beforeUpdate`, 数据更新之前调用。
6. `updated`, 数据更新之后。
7. `beforeDestory`, 实例被销毁前。
8. `destory`, 实例被销毁后。
* 虚拟dom还不是很了解,有机会要看一下。


> Vue-Router

```
// *** 路由配置文件
import Vue from 'vue'
import Router from 'vue-router'
import Page from '../views/Page'
import Login from '../views/Login'
import Register from '../views/Register'
import Movie from '../views/Movie'
import Book from '../views/Book'
import Status from '../views/Status'
import Group from '../views/Group'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page',
      name: 'Page',
      component: Page,
      children: [
        {
          path: 'movie/:id',
          name: 'Movie',
          cname: '电影',
          component: Movie
        },
        {
          path: 'book/id',
          name: 'Book',
          cname: '图书',
          component: Book
        },
        {
          path: 'status',
          name: 'Status',
          cname: '广播',
          component: Status
        },
        {
          path: 'group',
          name: 'Group',
          cname: '小组',
          component: Group
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: '/page',
          redirect: '/page/home'
        }
      ]
    },
    {
      path: '/',
      redirect: '/page/'
    },
    {
      path: '/login',
      name: 'Login',
      cname: '登录豆瓣',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      cname: '注册账号',
      component: Register
    }
  ]
})
```

* 这是我的路由配置文件。该插件有2个组件分别是`router-link`,`router-view`。
* 使用方法很简单,安装后导入,使用全局方法`Vue.use`,该方法会自动阻止多次注册相同的插件,届时只会注册一次。
* 完成配置后由入口文件导入,并将该配置传入Vue实例中,从而注入到各个组件中。
* 首先创建`Router`实例,`path` 为匹配的路径,当匹配到该名称时,会显示component中的组件。命名路由:`name`,为某个路由设置名称,可用作页面跳转。`children`为嵌套路由,后面会讲。
* 对于所有ID不同的用户,都用同一个组件来渲染,这时我们可以使用动态路由,在路径后加入`:id`。我们可以在`this.$route.params`中找到该`id`值,`this`指的是当前`Vue`实例  
`$route`中也包含了诸多有用的属性,比如`$route.path`保存了完整的路径名,`$route.fullPath`保存了解析后的URL,包含查询参数和has,`$route.query`中保留了查询参数(如果有的话)。  
`$route.name` 保存了路由名称(如果有的话)。`$route.redirectedFrom`如果存在重定向,则显示为来源名。
* 嵌套路由: 在`Page`页下设置一个路由出口`<router-view></router-view>`, 当匹配到`/page/movie/20`时, `Movie`会被渲染在`Page`下的`<router-view></router-view>`中。
前提是我们在`children`属性做了相关配置。
* 在路由实例中存放了很多有用的属性和方法,可以使用`$router.push`进行页面跳转,也可以使用`<router-link :to="...">`。
* `$router.push()`页面跳转,同时向history添加一个新的记录,支持后退操作。该方法接受一个描述地址的参数  
可使用`name`值,`path`值,添加参数则用`params`,查询参数用`query`
* 命名视图, 在路由出口标签`<router-view name="abc">`中添加属性`name`,并且在对应的`components`属性中添加一个对象,该对象的属性名必须与'name'值保持一致。  
也可定义`default`默认出口。
* 重定向: `redirect` 如果添加该属性,则将`path`匹配到的路径重定向至`redirect`定义的值。
* 有关 `router-link` 的属性如下:
* active-class,为当前链接的样式添加`router-link-active`,也可通过`linkActiveClass`配置默认样式。
* tag,将当前标签渲染成指定的标签。
* to,跳转到指定的路径。
* append 跳转到某一路径时,设置了该参数则 a/b,否则直接跳到 b

> Vuex

```
import Vue from 'vue'
import Vuex from 'vuex'
import movie from './modules/movie'
import book from './modules/book'
import status from './modules/status'
import talion from './modules/talion'
import home from './modules/home'

Vue.use(Vuex)

// 导出该对象,并由main.js注入到子组件中
export default new Vuex.Store({
  modules: {
    movie,
    book,
    status,
    talion,
    home
  }
})
```

* 这是我的vuex配置文件,导入后同样使用全局方法`Vue.use`使用。实例化一个vuex对象,将store分割成模块,每个模块拥有自己的 state、mutation、action、getter。

```
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
  created () {
    this.getBook()
  }
}
</script>
```

* `vuex`中提供了2个方法`mapActions`,`mapState`,将他们一并导入。在`methods`中使用`mapActions`将`this.getBook`映射为`this.$store.dispatch('getBook')`。
触发点是在`created`时,也就是实例创建完成后。

```
const mutations = {
  getBook (state, payLoad) {
    let [fic, noFic, find, paperBook, paperFirstShow, type] = payLoad.data
    state.fic = fic.data.list
    state.noFic = noFic.data.list
    state.find = find.data
    state.paperBook = paperBook.data.list
    state.type = type.data.list
    state.paperFirstShow = paperFirstShow.data.list
  }
}

const actions = {
  getBook ({ commit }) {
    axios.all([
      axios.get('Api/fic'),
      axios.get('Api/noFic'),
      axios.get('Api/find'),
      axios.get('Api/paperBook'),
      axios.get('Api/paperFirstShow'),
      axios.get('Api/type')
    ])
      .then(axios.spread((...data) => {
        commit({
          type: 'getBook',
          data
        })
      }))
  }
}
```

* 这是我定义的`actions`,该函数被触发,同时执行了5个异步请求。完成请求后提交,来唤醒一个名为`getBook`的mutations,同时将获取到的`data`传入载荷中。
此时`mutations`中的`getBook`方法接受2个参数,`state`为视图中要使用的数据,`payLoad`是接受到的数据,将载荷中的数据分配到各个`state`中。
* `state`中有了数据之后, 在`computed`属性中使用`mapState`方法 `fic: state => state.book.fic,`这段代码 `this.fic`将被映射为`$store.state.book.fic`。