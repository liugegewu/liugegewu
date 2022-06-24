// 获取应用实例
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:(options)=> {

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

  },

  queryUser(){
    wx.request({
      url: 'http://localhost:8088/app/test/',
      data: {

      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success:(res)=> {
        wx.showLoading({
          title: '查询中',
        })
        console.log(res)
        this.setData({
          userList:res.data
        },()=>{
          console.log('11'+this.data.userList)
          wx.hideLoading()
        })
      }
    })
    
  }

})