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
> Es6  
   * 摒弃了es5的陈旧写法,采用了es6新特性,其中包括如下
   1. `const` 与 `let` 。
      * 声明方式使用 `const` (常量声明) 和 `let` (变量声明) 替代 `var` 。
      * var 声明的变量附带变量提升机制(hoisting),而`let` 与 `const` 的出现为我们提供了块级作用域,并且没有变量提升,重复声明则会报错,
      这样使得变量不被污染,不易冲突,增强易读性,减少混乱
   2. 模板字符串 ``
      * 不再使用引号与加号的拼接方式 (`'Excuse me,pretty' + data + 'You are so wonderful'`)
      * 代替方法 `Excuse me,pretty ${data} You are so wonderful`
      * 新增的模板字符串为我们拼接字符串带来了极高的效率,增强了易读性的同时,也极大简化了拼接难度
   3. 箭头函数 () => {}
      * 例: `let a = () => Math.random()`
      * 箭头函数拥有四大特性
         * 更加简明的语法
         * 当函数体内只有一条语句时,可以省略return关键字和花括号
         * 箭头函数是匿名函数,但不需要使用关键字function声明
         * this指向. 箭头函数不拥有this值,其this值继承了父级作用域
   4. 简化对象格式写法
      * 例: `function people(name, age) {
                 return {
                     name: name,
                     age: age
                 };
             }`
      * 新写法: `function people(name, age) {
                 return { name, age };
             }`
      * 同样提高了编码效率
   5. 解构赋值
      * 例: `const { data } = { data: 'Go!' }`  
       等价于 `var data = obj.data`
      * 一行代码搞定变量声明,赋值更快捷 (上手稍有难度 当时看的头都晕了T.T)
      * 例: `var body = request.body`  
             `var username = body.username`  
             `var password = body.password`
      * 新写法: `const { body, body: { username, password } } = request` 
      * 允许使用默认值
      * 例: `const [foo = true] = []`
      * 当右边的数组成员严格等于undefined，默认值才会生效
      * 字符串解构赋值  
      * `const [a, b, c, d, e] = 'hello'`  
        `a = 'h', b = 'e', c = 'l', d = 'l', e = 'o'`  
      * 函数传参也能使用解构赋值 
      `function add([x, y]){
        return x + y;
        }`  
        `add([1, 2]); // 3` 
   6. Spread Operator 
      * 例: `const number = [1,2,3,4,5]`
      * 例: `const [first, ...rest] = number`  
      * 例: `const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };`
      * 说明: `x = 1, y = 2` 未被分配的剩余属性,将会分配到变量z上,且剩余符必须是最后一个参数
      * 例: `const z = { a: 3, b: 4 }`  
      `const n = { ...z }`  
      变量z被展开,即 `n = { a: 3, b: 4 }`  
      当然还有诸多用法,不一一列举
   7. import 和 export
      * 例: `import people from './example'` 根据默认的导出而导入
      * 例: `import {name, age} from './example'` 根据导出值对应导入
      * 例: `export default App` 默认导出
      * 例: `export { state, mutations, actions}` 指定导出
      * 在Es6以前,想要实现模块化,开发者通常会使用RequireJS或者seaJS.而现在ES6自带了模块化,  
      * 使用要点:
         * 当用export name 时，就用import { name }导入（必须添加花括号)
         * 一个文件里，有且只能有一个export default。但可以有多个export。
         * 当一个文件里，既有一个export default people, 又有多个export name 或者 export age时，导入就用 import people, { name, age } 
         * 当一个文件里出现n多个 export 导出很多模块，导入时除了一个一个导入，也可以用import * as moudule1 from example
   8. Promise
      * 在promise之前代码过多的回调或者嵌套，可读性差、耦合度高、扩展性低,而通过Promise机制，扁平化的代码机构，大大提高了代码可读性,成功规避'回调地狱'。  
当然Es6新特性远不止于此，对于我们日常的开发来说,这算不上全部，但是能算得上是高频使用了。
如今Es6已成为趋势,是开发中不可或缺的成员之一。  
以上所总结的Es6不过是冰山一角,在实际开发中会发掘出更多有趣的写法,来一起畅游Es6的海洋吧。 :)
      
  > Sass
  
  * 强大又稳定的css扩展语言
  1. 引入了变量
     * 可以将多次使用的属性值赋予给某一变量,从而多次使用,变量以$开头,以:为赋值手段  
     例: `$padding-left: 20px;`
  2. 新的css嵌套规则
     ```
     #content article h1 { color: #333 }
     #content article p { margin-bottom: 1.4em }
     #content aside { background-color: #EEE }
        ```
     如你所见,重复书写选择器是一件非常恼人的工作,随着嵌套的深入,我们需要一遍又一遍的书写重复的选择器  
     这样的写法既繁琐又不利于维护。  
     所幸的是,机智的Sass很好的避开了这种问题。

     ```
        #content {
            article {
                h1 { color: #333 }
                p { margin-bottom: 1.4em }
            }
            aside { background-color: #EEE }
        }
        ```    
     
 3. 父选择器的标识符`&`
    ```
    a{
        color: blue;
        &:hover { color: red }
    }
    ```    
    & 表示的是`a`标签本身,类似于js中的`this`(好奇怪的比喻)
4. 支持文件导入 `@import`
   * css中也有导入功能,不同的是css中的`@import`只有被执行到,浏览器才会去下载,这将导致页面加载速度变慢。  
   Sass与之不同的是,会将样式都归纳到一个css文件中,而无需再次发起下载请求。  
   导入时亦可省略后缀名。  

   ![导入方式](https://www.sass.hk/images/p1.png)

5. 默认变量值
   * 一般情况下，你反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值。例如下
   ```
    $link-color: blue;
    $link-color: red;
    a {
        color: $link-color;
    }
   ```