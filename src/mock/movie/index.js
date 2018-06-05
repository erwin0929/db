// movie使用的mock
import Mock from 'mockjs'
import common from '../common'

const { type, size, text } = common
const Random = Mock.Random

// 影院热映
const hotMovie = {
  'list|8': [{
    'id|+1': 1,
    'title|+1': [
      '后来的我们',
      '幕后玩家',
      '狂暴巨兽',
      '低压槽：欲望之城',
      '战神纪',
      '头号玩家',
      '玛丽与魔女之花',
      '犬之岛'
    ],
    'image': Random.dataImage(size, text),
    'score|5-9.1': 1
  }]
}

// 免费在线观影
const onlineMovie = {
  'list|8': [{
    'id|+1': 1,
    'title|+1': [
      '肖申克的救赎',
      '霸王别姬',
      '这个杀手不太冷',
      '阿甘正传',
      '美丽人生',
      '千与千寻',
      '泰坦尼克号',
      '辛德勒的名单'
    ],
    'image': Random.dataImage(size, text),
    'score|6-9.1': 1
  }]
}

// 新片速递
const newMovie = {
  'list|6': [{
    'id|+1': 1,
    'title|+1': [
      '香港大营救',
      '巴霍巴利王',
      '青年马克思',
      '任性的硬币',
      '极限挑战',
      '非诚勿扰'
    ],
    'image': Random.dataImage(size, text),
    'score|6-9.1': 1
  }]
}

const findMovie = [
  {
    title: '同时入选IMDB250和豆瓣电影250的电影',
    href: 'https://m.douban.com/doulist/968362/',
    color: '#FFAC2D'
  },
  {
    title: '带你进入不正常的世界',
    href: 'https://m.douban.com/doulist/16002',
    color: '#FF4055'
  },
  {
    title: '用电【影】来祭奠逝去的岁月',
    href: 'https://m.douban.com/doulist/190343',
    color: '#4F9DED'
  },
  {
    title: '女孩们的故事【电影】',
    href: 'https://m.douban.com/doulist/1125971',
    color: '#FFC46C'
  },
  {
    title: '美国生活面面观',
    href: 'https://m.douban.com/doulist/121326',
    color: '#3BA94D'
  }
]

export {
  hotMovie,
  onlineMovie,
  newMovie,
  findMovie,
  type
}
