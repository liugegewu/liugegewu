// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false, // 如需尝试获取用户信息可改为false
    showAddress:'',
    isShowImg:false,
    time1:null,
    time2:null
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
        isShowImg:true
      })
    }
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

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  //获取地址
  getUserAddress(e){
    // wx.getLocation({
    //   type:'wgs84',
    //   success:(res)=>{
    //     console.log(res);
    //     this.setData({
    //       userAddress:{n:res.latitude,w:res.longitude},
    //       showAddress:'坐标：'+res.latitude+' N，'+res.longitude+' W，开火，biubiubiu~~~~~~~'
    //     })
    //   }
    // })
    wx.showModal({
      cancelColor: 'cancelColor',
      title:'炮火覆盖即将开始，是否确定？',
      success :(res)=> {
        if (res.confirm) {
          this.time1=setTimeout(()=>{this.setData({
            isShowImg:false
          })}, 1000,);
        } 
      }
    },clearTimeout(this.time1)
    )
  },

  //用户页面跳转
  returnUserPage:(res)=>{
    wx.navigateTo({
      url:res.currentTarget.dataset.url
    })
  }

})
