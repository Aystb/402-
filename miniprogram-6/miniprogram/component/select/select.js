// component/item/select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectArray: {
      type: Array,
      
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectShow: false, //默认初始option不显示
    nowText: '', //默认初始内容
    animationData: {} //右边箭头的动画
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onInit: function () {
      this.setData({
        nowText: this.data.selectArray[0].text,//默认内容为第一项
      })
    },
    //option的显示与否
    selectTap: function () {
      let selectShow = this.data.selectShow; //获取当前option显示的状态
      //创建动画
      let animation = wx.createAnimation({
        timingFunction: "ease"
      })
      this.animation = animation;
      if (selectShow) {
        animation.rotate(0).step();
        this.setData({
          animationData: animation.export()
        })
      } else {
        animation.rotate(180).step();
        this.setData({
          animationData: animation.export()
        })
      }
      this.setData({
        selectShow: !selectShow
      })
    },
    //设置内容
    setText: function (e) {
      let nowArr = this.properties.selectArray; //当前option的数据是引入组件的页面传过来的，所以这里获取数据只有通过this.properties
      let nowIdx = e.target.dataset.index; //当前点击的索引
      let nowText = nowArr[nowIdx].text; //当前点击的内容
      //再次执行动画，使下拉选择图标改变
      this.animation.rotate(0).step();
      this.setData({
        selectShow:"false",
        nowText: nowText,
        animationData: this.animation.export()
      })
      let nowDate = {
        id: nowIdx,
        text: nowText
      }
      this.triggerEvent('myget', nowDate)
    }
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached() {
    // 在组件实例进入页面节点树时执行
    // 在组件实例进入页面节点树时执行
    // this._onInit();
  },
  // 以下为新方法 >=2.2.3
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      // this._onInit();
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
    ready() {
      // console.log('进入ready节点=', this.data.date);
      this._onInit();
    }
  }
})
