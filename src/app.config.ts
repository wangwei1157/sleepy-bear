export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/personal/index',
    'pages/dish/index',
  ],
  tabBar: {
    color: '#000',
    selectedColor: '#1296db',
    backgroundColor: '#fff',
    // borderStyle: 'black',
    list: [
      {
        iconPath: 'assets/images/bar/home.png',
        selectedIconPath: 'assets/images/bar/home-s.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'assets/images/bar/my.png',
        selectedIconPath: 'assets/images/bar/my-s.png',
        pagePath: 'pages/personal/index',
        text: '我的',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
