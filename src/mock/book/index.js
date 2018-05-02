// book专用mock
import Mock from 'mockjs'

const Random = Mock.Random
const size = '126x190'
const text = 'Mock生成的测试图片'

// 虚构类
const fic = {
  'list|7': [{
    'id|+1': 1,
    'title|+1': [
      '倒悬的地平线',
      '神雕侠侣',
      '兰亭序杀局1',
      '鲸鱼星之夏',
      '禁闭岛',
      '玻璃珠游戏',
      't天下有敌'
    ],
    'image': Random.dataImage(size, text),
    'score|5-9.1': 1
  }]
}

// 非虚构类
const noFic = {
  'list|5': [{
    'id|+1': 1,
    'title|+1': [
      '写作法宝',
      '故事技巧',
      '开始写吧!',
      '非虚构的我',
      '小说何以重要'
    ],
    'image': Random.dataImage(size, text),
    'score|6-9.1': 1
  }]
}

// 分类浏览
const type = {
  list: [
    {
      title: '经典',
      href: 'movie/classic'
    },
    {
      title: '冷门佳片',
      href: 'movie/underrated'
    },
    {
      title: '豆瓣高分',
      href: 'movie/doubantop'
    },
    {
      title: '动作',
      href: 'movie/action'
    },
    {
      title: '喜剧',
      href: 'movie/comedy'
    },
    {
      title: '爱情',
      href: 'movie/love'
    },
    {
      title: '悬疑',
      href: 'movie/mystery'
    },
    {
      title: '恐怖',
      href: 'movie/horror'
    },
    {
      title: '科幻',
      href: 'movie/scifi'
    },
    {
      title: '治愈',
      href: 'movie/sweet'
    },
    {
      title: '文艺',
      href: 'movie/artfilm'
    },
    {
      title: '成长',
      href: 'movie/youth'
    },
    {
      title: '动画',
      href: 'movie/animation'
    },
    {
      title: '华语',
      href: 'movie/chinese'
    },
    {
      title: '欧美',
      href: 'movie/western'
    },
    {
      title: '韩国',
      href: 'movie/korean'
    },
    {
      title: '日本',
      href: 'movie/japanese'
    }
  ]
}

// 发现好书
const find = [
  {
    title: '不可饶恕的女人们',
    href: 'https://m.douban.com/doulist/35573',
    color: '#42BD56'
  },
  {
    title: '爱欲书',
    href: 'https://m.douban.com/doulist/38088147',
    color: '#FF4055'
  },
  {
    title: '他们还写侦探小说',
    href: 'https://m.douban.com/doulist/645579',
    color: '#4F9DED'
  },
  {
    line: true
  },
  {
    title: '人生识字始忧患',
    href: 'https://m.douban.com/doulist/192653',
    color: '#CC3344'
  },
  {
    title: '詩歌書店',
    href: 'https://m.douban.com/doulist/89925',
    color: '#FFAC2D'
  },
  {
    title: '尝试理解人类变化无常不可测心理相关小荐',
    href: 'https://m.douban.com/doulist/45361809',
    color: '#3BA94D'
  }
]

export {
  fic,
  noFic,
  find,
  type
}
