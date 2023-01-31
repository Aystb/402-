// pages/present/present.ts
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img: '../img/free.png',
    //在globalData中接受预约界面的组别并显示在使用中图片下
    group: '',
    using: '空闲',
    reserve: '预约',
    whereiskeytext: '钥匙在哪儿？',
    key:true,
    antikey:false,
    whereiskey:'未填写',
  },

  reserve() {
    wx.navigateTo({ url: '/pages/reserve/reserve' });
  },

  whereiskey(){
    this.setData({
      key:false,
      antikey:true,
    })

  },



keyinput(e){
this.setData({
  whereiskey:e.detail.value,
})


},
//修改钥匙在哪里
confirm(){
wx.request({
  url: 'https:\/\/api\.room402\.temp\.ziqiang\.net\.cn\/api\/1.0\/whereiskey',
  method: 'POST',
  data: {
    whereiskey:this.data.whereiskey,
  },
  success: (res) => {
    console.log(res);
  },
})
app.globalData.whereiskey=this.data.whereiskey;
//点击以后隐藏的实现
this.setData({
  key:true,
  antikey:false,
})
},

cancel(){

  this.setData({
    key:true,
    antikey:false,
    whereiskey:'',
  })

},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    app.loadFontFace()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
      });
    }
    // this.setData({
    //   group: app.globalData.group,
    // })
  },
  loadFontFace() {
    wx.loadFontFace({
      family: 'REEJI-ZhenyanGB-Regular',
      source: 'url("https://raw.githubusercontent.com/Aystb/402-/ttf/RuiZiChaoPaiZhenYan2.0Jian.ttf")',
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
    wx.loadFontFace({
      family: 'REEJI-FlashItalicGB-Flash-Regular',
      source: 'url("https://raw.githubusercontent.com/Aystb/402-/ttf/RuiZiChaoPaiChiGuangHei-Shan-ChangGui(REEJI-FlashItalicGB-Flash-Regular)-2.ttf")',
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
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
