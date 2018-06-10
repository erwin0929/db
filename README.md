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
* [Webpack]()
* [Vue](http://vuejs.org)
* [Vuex](https://vuex.vuejs.org)
* [Vue-Router](https://router.vuejs.org/zh/)
* [Mock](http://mockjs.com)
* [Axios](https://github.com/axios/axios)
* [Es6](http://es6.ruanyifeng.com)
* [Sass](https://www.sass.hk)

## 个人心得
* 为方便开发,本次使用的是vue-cli生成的模板,后期若有重构时间,会自主定制webpack配置,以此提高自己对webpack的理解
* 摒弃了es5的陈旧写法,采用了es6新特性,其中包括如下
   1. `const` 与 `let` 。
      * 声明方式使用 `const` (常量声明) 和 `let` (变量声明) 替代 `var` 。
   2. 模板字符串 ``
      * 不再使用引号与加号的拼接方式 (`'Excuse me,pretty' + data + 'You are so wonderful'`)
      * 代替方法 `Excuse me,pretty ${data} You are so wonderful`
   3. 箭头函数 () => {}
      * `let a = () => Math.random()`
   4. 简化对象格式写法
      * `function people(name, age) {
                 return {
                     name: name,
                     age: age
                 };
             }`
      * `function people(name, age) {
                 return { name, age };
             }`
   5. 解构赋值
      * `let { data } = { data: 'Go!' }`
   6. Spread Operator 
      * `const number = [1,2,3,4,5]`
      * `const [first, ...rest] = number`  
   7. import 和 export
      * `import people from './example'` 根据默认的导出而导入
      * `import {name, age} from './example'` 根据导出值对应导入
      * `export default App` 默认导出
      * `export { state, mutations, actions}` 指定导出
   8. Promise
      * 在promise之前代码过多的回调或者嵌套，可读性差、耦合度高、扩展性低
      
          
     
