// pages/persona/persona.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  gtartist:function(){
    wx.navigateTo({
      url: '../index/artist/artist',
    })
  },
  gtsettled: function () {
    wx.navigateTo({
      url: '../persona/settled/settled',
    })
  },
  gtmycard: function () {
    wx.navigateTo({
      url: '../persona/mycard/mycard',
    })
  },
  gtmanage: function () {
    wx.navigateTo({
      url: '../persona/manage/manage',
    })
  },
  gtarchives: function () {
    wx.navigateTo({
      url: '../persona/archives/archives',
    })
  },
  gtfans: function () {
    wx.navigateTo({
      url: '../persona/fans/fans',
    })
  },
  gtmycomment: function () {
    wx.navigateTo({
      url: '../persona/mycomment/mycomment',
    })
  },
  gtmylove: function () {
    wx.navigateTo({
      url: '../persona/mylove/mylove',
    })
  },
  gtnews: function () {
    wx.navigateTo({
      url: '../persona/news/news',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})