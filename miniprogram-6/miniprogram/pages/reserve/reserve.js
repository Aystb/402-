// pages/reserve/reserve.ts
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    reserveData: '',
    starttime: '',
    endtime: '',
    text: '',
    memberTypeArray: [{

      "text": "例会"
    }, {

      "text": "活动"
    }, {

      "text": "其他"
    }],
    choice: "例会",

  },

  getSelect: function (e) {
    let that = this;
    let value = e.detail.text; //value就是选择后的文字
    this.setData({
      choice: e.detail.text
    })

  },

  reserveData(e) {
    this.setData({
      reserveData: e.detail.value
    });
  },
  starttime(e) {
    this.setData({
      starttime: e.detail.value
    });
  },
  endtime(e) {
    this.setData({
      endtime: e.detail.value
    });
  },
  text(e) {
    this.setData({
      text: e.detail.value
    });
  },
  submit() {
    app.globalData.reserveData = this.data.reserveData,
    app.globalData.starttime = this.data.starttime,
    app.globalData.endtime = this.data.endtime,
    app.globalData.text = this.data.text,
    app.globalData.choice = this.data.choice
    //向后端传输预约信息
    wx.request({
      url: 'http://127.0.0.1:8000/api/1.0/users/1/records',
      method : "POST",
      data: {
        id: app.globalData.id,
        starttime: this.data.reserveData + this.data.starttime,
        endtime: this.data.reserveData + this.data.endtime,
        choice: this.data.choice,
        text: this.data.text,

      },
      success: (res) => {
        console.log(res.data)

      }
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
  onShow() {},

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
