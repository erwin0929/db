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

## 学习总结

> Vue   

安装不再赘述,本文将对我的文档结构以我的个人认知进行剖析。  
那么直接进入入口文件`src/main.js`开始介绍。
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
以上导入了`vue`库, 模板入口文件`App.vue`, 路由配置文件, `vuex`配置文件和样式初始化文件。  
初始化实例,并将使用的模板文件`App`,路由文件和vuex配置文件注入到实例中,最后将实例手动挂载到`#app`元素上。  
顺带一提,这里使用`$mount('#app')`和`el: '#app'`皆可,只不过`$mount`支持延迟挂载。