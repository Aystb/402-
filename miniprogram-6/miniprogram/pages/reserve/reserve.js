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
    //转换时间格式

let month=this.data.reserveData.slice(0,2);
let day=this.data.reserveData.slice(3,5);
let starthour=this.data.starttime.slice(0,2);
let startminutes=this.data.starttime.slice(3,5);
let endhour=this.data.endtime.slice(0,2);
let endminutes=this.data.endtime.slice(3,5);
let starttime=2023+"-"+month+"-"+day+" "+starthour+":"+startminutes+":"+"00"
let endtime=2023+"-"+month+"-"+day+" "+endhour+":"+endminutes+":"+"00"

this.setData({
  starttime: starttime,
  endtime:endtime,
})
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
