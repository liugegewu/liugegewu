Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "/pages/index/index",
      "text": "首页"
    },
    {
      "pagePath": "/pages/tarBar/leftBar",
      "text": "左"
    },
    {
      "pagePath": "/pages/tarBar/rightBar",
      "text": "右"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log("wwww",data)
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})