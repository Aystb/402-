// pages/timetable/timetable.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [{
      group: "",
      starttime: "",
      endtime: ""
    }],
    flagWeek: 0,
    thisweek: ["thisWeek", "thisWeekOff"],
    nextweek: ["nextWeek", "nextWeekOn"],
    list: [
      { id: "00", className: "0", text: "" }
      , { id: "01", className: "weeks", text: "周日" }
      , { id: "02", className: "weeks", text: "周一" }
      , { id: "03", className: "weeks", text: "周二" }
      , { id: "04", className: "weeks", text: "周三" }
      , { id: "05", className: "weeks", text: "周四" }
      , { id: "06", className: "weeks", text: "周五" }
      , { id: "07", className: "weeks", text: "周六" }
      , { id: "80", className: "timeTable", text: "8:00\n9:00" }
      , { id: "81", className: "unSelected", text: "" }
      , { id: "82", className: "unSelected", text: "" }
      , { id: "83", className: "unSelected", text: "" }
      , { id: "84", className: "unSelected", text: "" }
      , { id: "85", className: "unSelected", text: "" }
      , { id: "86", className: "unSelected", text: "" }
      , { id: "87", className: "unSelected", text: "" }
      , { id: "90", className: "timeTable", text: "9:00\n10:00" }
      , { id: "91", className: "unSelected", text: "" }
      , { id: "92", className: "unSelected", text: "" }
      , { id: "93", className: "unSelected", text: "" }
      , { id: "94", className: "unSelected", text: "" }
      , { id: "95", className: "unSelected", text: "" }
      , { id: "96", className: "unSelected", text: "" }
      , { id: "97", className: "unSelected", text: "" }
      , { id: "100", className: "timeTable", text: "10:00\n11:00" }
      , { id: "101", className: "unSelected", text: "" }
      , { id: "102", className: "unSelected", text: "" }
      , { id: "103", className: "unSelected", text: "" }
      , { id: "104", className: "unSelected", text: "" }
      , { id: "105", className: "unSelected", text: "" }
      , { id: "106", className: "unSelected", text: "" }
      , { id: "107", className: "unSelected", text: "" }
      , { id: "110", className: "timeTable", text: "11:00\n12:00" }
      , { id: "111", className: "unSelected", text: "" }
      , { id: "112", className: "unSelected", text: "" }
      , { id: "113", className: "unSelected", text: "" }
      , { id: "114", className: "unSelected", text: "" }
      , { id: "115", className: "unSelected", text: "" }
      , { id: "116", className: "unSelected", text: "" }
      , { id: "117", className: "unSelected", text: "" }
      , { id: "120", className: "timeTable", text: "12:00\n13:00" }
      , { id: "121", className: "unSelected", text: "" }
      , { id: "122", className: "unSelected", text: "" }
      , { id: "123", className: "unSelected", text: "" }
      , { id: "124", className: "unSelected", text: "" }
      , { id: "125", className: "unSelected", text: "" }
      , { id: "126", className: "unSelected", text: "" }
      , { id: "127", className: "unSelected", text: "" }
      , { id: "130", className: "timeTable", text: "13:00\n14:00" }
      , { id: "131", className: "unSelected", text: "" }
      , { id: "132", className: "unSelected", text: "" }
      , { id: "133", className: "unSelected", text: "" }
      , { id: "134", className: "unSelected", text: "" }
      , { id: "135", className: "unSelected", text: "" }
      , { id: "136", className: "unSelected", text: "" }
      , { id: "137", className: "unSelected", text: "" }
      , { id: "140", className: "timeTable", text: "14:00\n15:00" }
      , { id: "141", className: "unSelected", text: "" }
      , { id: "142", className: "unSelected", text: "" }
      , { id: "143", className: "unSelected", text: "" }
      , { id: "144", className: "unSelected", text: "" }
      , { id: "145", className: "unSelected", text: "" }
      , { id: "146", className: "unSelected", text: "" }
      , { id: "147", className: "unSelected", text: "" }
      , { id: "150", className: "timeTable", text: "15:00\n16:00" }
      , { id: "151", className: "unSelected", text: "" }
      , { id: "152", className: "unSelected", text: "" }
      , { id: "153", className: "unSelected", text: "" }
      , { id: "154", className: "unSelected", text: "" }
      , { id: "155", className: "unSelected", text: "" }
      , { id: "156", className: "unSelected", text: "" }
      , { id: "157", className: "unSelected", text: "" }
      , { id: "160", className: "timeTable", text: "16:00\n17:00" }
      , { id: "161", className: "unSelected", text: "" }
      , { id: "162", className: "unSelected", text: "" }
      , { id: "163", className: "unSelected", text: "" }
      , { id: "164", className: "unSelected", text: "" }
      , { id: "165", className: "unSelected", text: "" }
      , { id: "166", className: "unSelected", text: "" }
      , { id: "167", className: "unSelected", text: "" }
      , { id: "170", className: "timeTable", text: "17:00\n18:00" }
      , { id: "171", className: "unSelected", text: "" }
      , { id: "172", className: "unSelected", text: "" }
      , { id: "173", className: "unSelected", text: "" }
      , { id: "174", className: "unSelected", text: "" }
      , { id: "175", className: "unSelected", text: "" }
      , { id: "176", className: "unSelected", text: "" }
      , { id: "177", className: "unSelected", text: "" }
      , { id: "180", className: "timeTable", text: "18:00\n19:00" }
      , { id: "181", className: "unSelected", text: "" }
      , { id: "182", className: "unSelected", text: "" }
      , { id: "183", className: "unSelected", text: "" }
      , { id: "184", className: "unSelected", text: "" }
      , { id: "185", className: "unSelected", text: "" }
      , { id: "186", className: "unSelected", text: "" }
      , { id: "187", className: "unSelected", text: "" }
      , { id: "190", className: "timeTable", text: "19:00\n20:00" }
      , { id: "191", className: "unSelected", text: "" }
      , { id: "192", className: "unSelected", text: "" }
      , { id: "193", className: "unSelected", text: "" }
      , { id: "194", className: "unSelected", text: "" }
      , { id: "195", className: "unSelected", text: "" }
      , { id: "196", className: "unSelected", text: "" }
      , { id: "197", className: "unSelected", text: "" }
      , { id: "200", className: "timeTable", text: "20:00\n21:00" }
      , { id: "201", className: "unSelected", text: "" }
      , { id: "202", className: "unSelected", text: "" }
      , { id: "203", className: "unSelected", text: "" }
      , { id: "204", className: "unSelected", text: "" }
      , { id: "205", className: "unSelected", text: "" }
      , { id: "206", className: "unSelected", text: "" }
      , { id: "207", className: "unSelected", text: "" }
    ],

  },
  changeon() {
    this.setData({
      flagWeek: 1,
    })
  },
  changeoff() {
    this.setData({
      flagWeek: 0,
    })
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
  changeSelected() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  Get() {
    wx.request({
      url: 'http://127.0.0.1:8000/users/records',
      method: 'GET',
      //记得拿回id
      success: (res) => {
        const results = {
          group: res.data.group,
          starttime: res.data.starttime,
          endtime: res.data.endtime
        }
        this.setData({

          //从后端拿数据时找不到数据是正常的，这里的报错其实没有问题
          datas: this.data.datas.concat(results)
        })
      },
    })
  },

  times() {
    for (let data of this.data.datas) {
      if (data != app.globalData.group) {
      }
    }
  },

  //点击切换到预约页面
  // toReserve() {
  //   wx.navigateTo({ url: "/pages/reserve/reserve" })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.loadFontFace(),
      this.changeSelected(),
      this.Get(),
      this.times()
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