export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/personal/index'
  ],
  tabBar: {
    list: [
      {
        // iconPath: 'resource/latest.png',
        // selectedIconPath: 'resource/lastest_on.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        // iconPath: 'resource/latest.png',
        // selectedIconPath: 'resource/lastest_on.png',
        pagePath: 'pages/personal/index',
        text: '我的',
      },
      // {
      //   iconPath: 'resource/hotest.png',
      //   selectedIconPath: 'resource/hotest_on.png',
      //   pagePath: 'pages/hot/hot',
      //   text: '热门',
      // },
      // {
      //   iconPath: 'resource/node.png',
      //   selectedIconPath: 'resource/node_on.png',
      //   pagePath: 'pages/nodes/nodes',
      //   text: '节点',
      // },
    ],
    color: '#000',
    selectedColor: '#56abe4',
    backgroundColor: '#fff',
    borderStyle: 'black',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
