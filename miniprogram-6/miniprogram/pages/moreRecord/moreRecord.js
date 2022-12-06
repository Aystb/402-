// pages/moreRecord/moreRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      day: "2022-12-10",
      hour: "10:00-11:00",
      text: "此处为预约理由"
    }, {
      day: "2022-12-10",
      hour: "10:00-11:00",
      text: "此处为预约理由"
    }]

  },
  loadFontFace() {
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
  Get() {
    wx.request({
      url: 'http://127.0.0.1:8000/users/' + app.globalData.id + '/records',
      method: 'Get',
      //记得拿回id
      success: (res) => {
        const time = new Date();
        const today = time.getDate();
        const currentMonth = time.getMonth() + 1;
        const currentHour = time.getHours();
        const currentYear = time.getFullYear();
        console.log(today);
        console.log(currentMonth);
        console.log(currentHour);
        console.log(currentYear);
        for (let data of res.data) {
          const thisStartTime = new Date(data.starttime);
          const thisEndTime = new Data(data.endtime);
          const thisMonth = thisStartTime.getMonth() + 1;
          const thisDay = thisStartTime.getDate();
          const thisStartHour = thisStartTime.getHours();
          const thisEndHour = thisEndTime.getHours();
          const thisYear = thisStartTime.getFullYear();
          var d1 = new Date(time.replace(/\-/g, "\/"));
          var d2 = new Date(thisEndTime.replace(/\-/g, "\/"));
          if (d1 > d2 || (d1 == d2 && currentHour >= thisEndHour)) {
            const thisTime = {
              day: thisYear + "-" + thisMonth + "-" + thisDay,
              hour: thisStartHour + ":00-" + thisEndHour + ":00",
              text: res.data.choice + "\n" + res.data.text
            }
            this.setData({
              list: this.data.list.concat(thisTime)
            })
          }
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadFontFace()
    this.Get()
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