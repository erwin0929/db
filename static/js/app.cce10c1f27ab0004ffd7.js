webpackJsonp([11],{"9BLX":function(t,e){},AVBW:function(t,e){},CT5g:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("MVMM"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=i("vSla")({name:"App"},a,!1,function(t){i("AVBW")},null,null).exports,r=i("zO6J"),l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  我是user页哦!\n")])},staticRenderFns:[]};var s=i("vSla")({name:"name"},l,!1,function(t){i("9BLX")},"data-v-9b250cde",null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("我是A页面")])},staticRenderFns:[]};var c=i("vSla")({name:"A"},m,!1,function(t){i("CT5g")},"data-v-416f71bc",null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("我是B页面")])},staticRenderFns:[]};var d=i("vSla")({name:"B"},p,!1,function(t){i("sWxQ")},"data-v-899b4b80",null).exports;o.a.use(r.a);var u=new r.a({routes:[{path:"/page",name:"Page",component:function(){return Promise.all([i.e(0),i.e(5)]).then(i.bind(null,"3ErM"))},children:[{path:"movie",name:"Movie",cname:"电影",component:function(){return Promise.all([i.e(0),i.e(3)]).then(i.bind(null,"M9xn"))}},{path:"book",name:"Book",cname:"图书",component:function(){return Promise.all([i.e(0),i.e(2)]).then(i.bind(null,"07ZH"))}},{path:"status",name:"Status",cname:"广播",component:function(){return Promise.all([i.e(0),i.e(4)]).then(i.bind(null,"gttO"))}},{path:"group",name:"Group",cname:"小组",component:function(){return Promise.all([i.e(0),i.e(1)]).then(i.bind(null,"+VUE"))}},{path:"home",name:"Home",component:function(){return Promise.all([i.e(0),i.e(8)]).then(i.bind(null,"j7e0"))}},{path:"/page",redirect:"/page/home"},{path:"test/:username/id/:id",name:"Test",component:i.e(9).then(i.bind(null,"dDHZ")),children:[{path:"ca",name:"Ca",components:{default:s,A:c,B:d}}]}]},{path:"/",redirect:"/page/"},{path:"/login",name:"Login",cname:"登录豆瓣",component:function(){return i.e(7).then(i.bind(null,"lmfZ"))}},{path:"/register",name:"Register",cname:"注册账号",component:function(){return i.e(6).then(i.bind(null,"tcoL"))}}],linkActiveClass:"defaultClass"}),h=i("9rMa"),f=i("KH7x"),v=i.n(f),g=i("aozt"),A=i.n(g),b=i("cLQA"),k=i.n(b),M={list:[{title:"经典",href:"movie/classic"},{title:"冷门佳片",href:"movie/underrated"},{title:"豆瓣高分",href:"movie/doubantop"},{title:"动作",href:"movie/action"},{title:"喜剧",href:"movie/comedy"},{title:"爱情",href:"movie/love"},{title:"悬疑",href:"movie/mystery"},{title:"恐怖",href:"movie/horror"},{title:"科幻",href:"movie/scifi"},{title:"治愈",href:"movie/sweet"},{title:"文艺",href:"movie/artfilm"},{title:"成长",href:"movie/youth"},{title:"动画",href:"movie/animation"},{title:"华语",href:"movie/chinese"},{title:"欧美",href:"movie/western"},{title:"韩国",href:"movie/korean"},{title:"日本",href:"movie/japanese"}]},F="126x190",y="Mock生成的测试图片",B=M,_={"list|8":[{"id|+1":1,"title|+1":["后来的我们","幕后玩家","狂暴巨兽","低压槽：欲望之城","战神纪","头号玩家","玛丽与魔女之花","犬之岛"],image:"@dataImage("+F+", "+y+")","score|5-9.1":1}]},w={"list|8":[{"id|+1":1,"title|+1":["肖申克的救赎","霸王别姬","这个杀手不太冷","阿甘正传","美丽人生","千与千寻","泰坦尼克号","辛德勒的名单"],image:"@dataImage("+F+", "+y+")","score|6-9.1":1}]},D={"list|6":[{"id|+1":1,"title|+1":["香港大营救","巴霍巴利王","青年马克思","任性的硬币","极限挑战","非诚勿扰"],image:"@dataImage("+F+", "+y+")","score|6-9.1":1}]};k.a.mock(/Api\/movie\/in_theaters/,_),k.a.mock(/Api\/movie\/coming_soon/,w),k.a.mock(/Api\/movie\/top250/,D),k.a.mock(/Api\/findMovie/,[{title:"同时入选IMDB250和豆瓣电影250的电影",href:"https://m.douban.com/doulist/968362/",color:"#FFAC2D"},{title:"带你进入不正常的世界",href:"https://m.douban.com/doulist/16002",color:"#FF4055"},{title:"用电【影】来祭奠逝去的岁月",href:"https://m.douban.com/doulist/190343",color:"#4F9DED"},{title:"女孩们的故事【电影】",href:"https://m.douban.com/doulist/1125971",color:"#FFC46C"},{title:"美国生活面面观",href:"https://m.douban.com/doulist/121326",color:"#3BA94D"}]),k.a.mock(/Api\/type/,B);var x={state:{hotMovie:[],onlineMovies:[],newMovies:[],findMovie:[],type:[]},mutations:{getMovie:function(t,e){var i=v()(e.data,5),o=i[0],a=i[1],n=i[2],r=i[3],l=i[4];t.hotMovie=o.data.list,t.onlineMovies=a.data.list,t.newMovies=n.data.list,t.findMovie=r.data,t.type=l.data.list}},actions:{getMovie:function(t){var e=t.commit;A.a.all([A.a.get("Api/movie/in_theaters?count=8"),A.a.get("Api/movie/coming_soon?count=8"),A.a.get("Api/movie/top250?count=8"),A.a.get("Api/findMovie"),A.a.get("Api/type")]).then(A.a.spread(function(){for(var t=arguments.length,i=Array(t),o=0;o<t;o++)i[o]=arguments[o];e({type:"getMovie",data:i})}))}}},C=M,I={"list|7":[{"id|+1":1,"title|+1":["倒悬的地平线","神雕侠侣","兰亭序杀局1","鲸鱼星之夏","禁闭岛","玻璃珠游戏","t天下有敌"],image:"@dataImage("+F+", "+y+")","score|5-9.1":1}]},S={"list|5":[{"id|+1":1,"title|+1":["写作法宝","故事技巧","开始写吧!","非虚构的我","小说何以重要"],image:"@dataImage("+F+", "+y+")","score|6-9.1":1}]},E={"list|6":[{"id|+1":1,"title|+1":["旅行","理想的下午","背包十年","出国自助游教室","再不远行","寻常放荡"],image:"@dataImage("+F+", "+y+")","score|5-9.1":1}]},H={"list|1":[{title:"造物",intro:"改变世界的万物图典,3000幅图例的发明与冒险",price:"¥ 68",image:"@dataImage(120x160, "+y+")"}]};k.a.mock(/Api\/fic/,I),k.a.mock(/Api\/noFic/,S),k.a.mock(/Api\/find/,[{title:"不可饶恕的女人们",href:"https://m.douban.com/doulist/35573",color:"#42BD56"},{title:"爱欲书",href:"https://m.douban.com/doulist/38088147",color:"#FF4055"},{title:"他们还写侦探小说",href:"https://m.douban.com/doulist/645579",color:"#4F9DED"},{title:"人生识字始忧患",href:"https://m.douban.com/doulist/192653",color:"#CC3344"},{title:"詩歌書店",href:"https://m.douban.com/doulist/89925",color:"#FFAC2D"},{title:"尝试理解人类变化无常不可测心理相关小荐",href:"https://m.douban.com/doulist/45361809",color:"#3BA94D"}]),k.a.mock(/Api\/paperBook/,E),k.a.mock(/Api\/type/,C),k.a.mock(/Api\/paperFirstShow/,H);var L={state:{fic:[],noFic:[],find:[],paperBook:[],type:[],paperFirstShow:[]},mutations:{getBook:function(t,e){var i=v()(e.data,6),o=i[0],a=i[1],n=i[2],r=i[3],l=i[4],s=i[5];t.fic=o.data.list,t.noFic=a.data.list,t.find=n.data,t.paperBook=r.data.list,t.type=s.data.list,t.paperFirstShow=l.data.list}},actions:{getBook:function(t){var e=t.commit;A.a.all([A.a.get("Api/fic"),A.a.get("Api/noFic"),A.a.get("Api/find"),A.a.get("Api/paperBook"),A.a.get("Api/paperFirstShow"),A.a.get("Api/type")]).then(A.a.spread(function(){for(var t=arguments.length,i=Array(t),o=0;o<t;o++)i[o]=arguments[o];e({type:"getBook",data:i})}))}}};k.a.mock(/Api\/status/,"post",{"list|3-6":[{"id|+1":1,"like|10-500":1,name:"@cname","commet|10-500":1,"retweet|10-500":1,dateTime:"@datetime","title|1":["我是谁?我在干什么","这是我最新的日记","每天都要写哦!","没有音乐的日子"]}]});var P={state:{list:[]},mutations:{increment:function(t,e){t.list=e.data.list}},actions:{getData:function(t){var e=t.commit;A.a.post("Api/status").then(function(t){var i=t.data;e({type:"increment",data:i})})}}};k.a.mock(/Api\/talion/,"post",{"list|3":[{"id|+1":1,"title|+1":["电影","电视","图书","同城","小组","阅读","游戏","应用","音乐","东西","FM","市集"],"intro|+1":["影院热议","正在热播","畅销排行","周末活动","志趣相投"],"color|+1":["rgb(35, 132, 232)","rgb(122, 106, 219)","rgb(159, 120, 96)","rgb(230, 70, 126)","rgb(42, 184, 204)","rgb(244, 143, 46)","rgb(159, 120, 96)","rgb(87, 116, 197)","rgb(89, 108, 221)","rgb(225, 100, 77)","rgb(64, 207, 169)","rgb(66, 189, 86)"]}]});var T={state:{navType:[]},mutations:{getData:function(t,e){t.navType=e.data.list}},actions:{getData:function(t){var e=t.commit;A.a.post("Api/talion").then(function(t){var i=t.data;e({type:"getData",data:i})})}}};k.a.mock(/Api\/getHome/,"post",{"list|10":[{"id|+1":1,"title|+1":["【国家地理】经典影像盛宴•北京中华世纪坛站","这样过周末心不累，周末去五台山寺院做义工，体验2日禅文化活动。","爱丽丝奇境缤纷之旅中国首展.北京站","全球18家最美图书馆之一篱苑书屋，一日休闲徒步活动！","【周末活动、端午假期— 户外活动/漂流/游玩/爬山/野营】活动都有"],"intro|1":["购买须知：限购说明：每单限购6张 座位类型：现场不设座位，均","活动报名咨询微信：blueeye918查看更看近期活动请关注","点击下方链接直接跳转周六日活动http://mp.weixi"],"type|1":["亲子","旅行","讲座","聚会","音乐"],image:"@dataImage(100x100, 测试图片)"}]});var R={state:{getIndex:0,length:3,homeList:[]},mutations:{loadMore:function(t,e){var i=0;console.log(e),t.homeList=t.homeList.concat(e.list.splice(i,3)),i+=3}},actions:{loadMore:function(t){var e=t.commit;A.a.post("Api/getHome").then(function(t){var i=t.data.list;e({type:"loadMore",list:i})})}}};o.a.use(h.a);var $=new h.a.Store({modules:{movie:x,book:L,status:P,talion:T,home:R}});i("m7aY");o.a.config.productionTip=!1,new o.a({router:u,store:$,components:{App:n},template:"<App/>"}).$mount("#app")},m7aY:function(t,e){},sWxQ:function(t,e){}},["NHnr"]);