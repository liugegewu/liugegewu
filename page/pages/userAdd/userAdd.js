// pages/userAdd/userAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  //新增调用
  addUser: function(res)  {
    wx.showLoading({
      title: '新增中......',
    })
    wx.request({
      url: 'http://localhost:8088/app/add/',
      data: res.detail.value,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success:(res)=> {
          wx.hideLoading()
          this.setData({
            userName:null,
            sex:null,
            address:null,
            arrivalDate:null,
            arrivalMode:null,
            appointmentTransfer:null,
            transferAddress:null
          })
      },
      fail:(res)=>{
        wx.showModal({
          title:'失败：'+res
        })
      }
    })
  },

  clearForm(){
    this.setData({
      userName:null,
      sex:null,
      address:null,
      arrivalDate:null,
      arrivalMode:null,
      appointmentTransfer:null,
      transferAddress:null
    })
  }

})