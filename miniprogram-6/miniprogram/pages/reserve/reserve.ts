// pages/reserve/reserve.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    reserveData: "",
    beginTime: "",
    overTime: "",
    reserveDiscribe:"",
  },
  
  reserveData(e: { detail: { value: any } }) {
    this.setData({ reserveData: e.detail.value })
  },
  beginTime(e: { detail: { value: any } }) {
    this.setData({ beginTime: e.detail.value })
  },
  overTime(e: { detail: { value: any } }) {
    this.setData({  overTime: e.detail.value })
  },
  reserveDiscribe(e: { detail: { value: any } }) {
    this.setData({ reserveDiscribe: e.detail.value })
  },
  submit(){
   
    app.globalData.reserveData=this.data.reserveData,
    app.globalData.beginTime=this.data.beginTime,
    app.globalData.overTime=this.data.overTime,
    app.globalData.reserveDiscribe=this.data.reserveDiscribe





  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})