Component({
  data: {
    selected: 2,
    list: [{
        pagePath: "/pages/timetable/timetable",
        iconPath: "/pages/img/notimetable.svg",
        selectedIconPath: "../pages/img/timetable.svg",
        className: "functionBarTimetable"
      },
      {
        pagePath: "/pages/present/present",
        iconPath: "../pages/img/nopresent.svg",
        selectedIconPath: "../pages/img/present.svg",
        className: "functionBarPresent"
      },
      {
        pagePath: "/pages/person/person",
        iconPath: "../pages/img/noperson.svg",
        selectedIconPath: "../pages/img/person.svg",
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