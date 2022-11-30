// pages/reserve/reserve.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    reserveData: "",
    starttime: "",
    endtime: "",
    text:"",
  },
  
  reserveData(e: { detail: { value: any } }) {
    this.setData({ reserveData: e.detail.value })
  },
  starttime(e: { detail: { value: any } }) {
    this.setData({ starttime: e.detail.value })
  },
  endtime(e: { detail: { value: any } }) {
    this.setData({  endtime: e.detail.value })
  },
  text(e: { detail: { value: any } }) {
    this.setData({ text: e.detail.value })
  },
  submit(){
   
    app.globalData.reserveData=this.data.reserveData,
    app.globalData.starttime=this.data.starttime,
    app.globalData.endtime=this.data.endtime,
    app.globalData.text=this.data.text





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