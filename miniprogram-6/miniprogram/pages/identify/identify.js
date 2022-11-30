// pages/identify/identify.ts
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    group: 'bm',
    job: '职位',
    username: '姓名',
    password: '123456',
    id: '123456',
  },

  //提交输入的内容
  submit() {
    //向后端传输数据并拿回数据
    wx.request({
      url: 'http://127.0.0.1:8000/api/1.0/users',
      method: 'POST',
      data: {
        username: this.data.username,
        password: this.data.password,
        group: this.data.group,
        job: this.data.job,
      },
      //记得拿回id
      success: (res) => {
        console.log(res);
        this.setData({
          //从后端拿数据时找不到数据是正常的，这里的报错其实没有问题
          username: res.data.username,
          password: res.data.password,
          group: res.data.group,
          job: res.data.job,
          id: res.data.id,
        });

        (app.globalData.username = this.data.username),
          (app.globalData.password = this.data.password),
          (app.globalData.group = this.data.group),
          (app.globalData.job = this.data.job),
          (app.globalData.id = this.data.id),
          (app.globalData.style =
            'width: 220rpx; background:linear-gradient(180deg, #A1FFE3 0%, rgba(91,255,169,0.88) 0%, #B7ECFF 131%, #57FFDD 131%);'),
          (app.globalData.identification = '已认证');
      },
    });
  },

  //根据input输入框的内容修改globalData的值
  username: function (e) {
    this.setData({ username: e.detail.value });
  },
  password: function (e) {
    this.setData({ password: e.detail.value });
  },
  group: function (e) {
    this.setData({ group: e.detail.value });
  },
  job: function (e) {
    this.setData({ job: e.detail.value });
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