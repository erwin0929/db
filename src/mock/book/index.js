// book专用mock
import common from '../common'

const { type, size, text } = common

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
    'image': `@dataImage(${size}, ${text})`,
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
    'image': `@dataImage(${size}, ${text})`,
    'score|6-9.1': 1
  }]
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

// 豆瓣纸书
const paperBook = {
  'list|6': [
    {
      'id|+1': 1,
      'title|+1': [
        '旅行',
        '理想的下午',
        '背包十年',
        '出国自助游教室',
        '再不远行',
        '寻常放荡'
      ],
      'image': `@dataImage(${size}, ${text})`,
      'score|5-9.1': 1
    }
  ]
}

// 豆瓣纸书下的着重显示数据
const paperFirstShow = {
  'list|1': [{
    'title': '造物',
    'intro': '改变世界的万物图典,3000幅图例的发明与冒险',
    'price': '¥ 68',
    'image': `@dataImage(120x160, ${text})`
  }]
}

export {
  fic,
  noFic,
  paperBook,
  find,
  paperFirstShow,
  type
}
