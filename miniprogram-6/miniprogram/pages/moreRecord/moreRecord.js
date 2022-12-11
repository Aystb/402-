// pages/moreRecord/moreRecord.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []

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

      url: 'https://api.room402.temp.ziqiang.net.cn/api/1.0/users/' + app.globalData.id + '/records',
      method: 'Get',

      success: (res) => {
        console.log(res.data)
        const time = new Date();
        const today = time.getDate();
        const currentMonth = time.getMonth() + 1;
        const currentHour = time.getHours();
        const currentYear = time.getFullYear();
        for (let data of res.data) {
          const thisStartTime = new Date(data.starttime);
          // console.log("start:"+thisStartTime);
          const thisEndTime = new Date(data.endtime);
          const thisMonth = thisStartTime.getMonth() + 1;
          const thisDay = thisStartTime.getDate();
          // console.log("thisDay:"+thisDay)
          const thisStartHour = thisStartTime.getHours();
          const thisEndHour = thisEndTime.getHours();
          const thisYear = thisStartTime.getFullYear();
          if (thisEndTime<=time) {
            const thisTime = {
              day: thisYear + "-" + thisMonth + "-" + thisDay,
              hour: thisStartHour + ":00-" + thisEndHour + ":00",
              text: data.choice + "\n" + data.text
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