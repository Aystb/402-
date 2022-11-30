Component({
  data: {
    selected: 2,
    list: [{
        pagePath: "/pages/timetable/timetable",
        iconPath: "/pages/img/时间表1.svg",
        selectedIconPath: "../pages/img/时间表.svg",
        className: "functionBarTimetable"
      },
      {
        pagePath: "/pages/present/present",
        iconPath: "../pages/img/当前1.svg",
        selectedIconPath: "../pages/img/当前.svg",
        className: "functionBarPresent"
      },
      {
        pagePath: "/pages/person/person",
        iconPath: "../pages/img/个人1.svg",
        selectedIconPath: "../pages/img/个人.svg",
        className: "functionBarPerson"
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      // this.setData({
      //   selected: data.index
      // })
      console.log(this.data.selected)
    }
  }
})