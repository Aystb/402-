// app.ts
App({
  globalData: {
    username: "",
    password: "password",
    group: "",
    job: "",
    id: "123456",
    identification: "前往认证",
    style: "width: 220rpx; background: linear-gradient(180deg, #2EB7F2 0%, #35BAF2 0%, #F0FBFF 131%);",
   
    reserveData: "",
    starttime: "",
    endtime: "",
    text: "",
  },
  loadFontFace() {
    wx.loadFontFace({
      family: 'REEJI-FlashItalicGB-Flash-Regular',
      source: 'url("https://raw.githubusercontent.com/Aystb/402-/ttf/RuiZiChaoPaiChiGuangHei-Shan-ChangGui(REEJI-FlashItalicGB-Flash-Regular)-2.ttf")',
      success(res) {
        console.log(res.status)
      },
      fail(res) {
        console.log(res.status)
      },
      complete(res) {
        console.log(res.status)
      }
    })
    wx.loadFontFace({
      family: 'REEJI-ZhenyanGB-Regular',
      source: 'url("https://raw.githubusercontent.com/Aystb/402-/ttf/RuiZiChaoPaiKeBianZhenYan2.0Jian(REEJI-ZhenyanGB2.0-GX)-2.ttf")',
      success(res) {
        console.log(res.status)
      },
      fail: function (res) {
        console.log(res.status)
      },
      complete: function (res) {
        console.log(res.status)
      }
    });
  },
  onLaunch(){
    this.loadFontFace()
  }
  // onLaunch() {
  //   // 展示本地存储能力
  //   const logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)


  // },
})