// pages/present/present.ts
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img: '../img/组 9.png',
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

confirm(){
//此处的请求在api完成后再写

app.globalData.whereiskey=this.data.whereiskey;
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
  onLoad() {},

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
