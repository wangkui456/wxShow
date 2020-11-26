// pages/myCenter/myCenter.js
const db = wx.cloud.database()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '购物狂欢',
    userimg: '',
    username: '',
    canIUse: false
  },
  bindGetUserInfo: function (e) {
    // this.setData({ username:e.detail.userInfo.nickName,userimg:e.detail.userInfo.avatarUrl,canIuse:true})
    var userInfo = e.detail.userInfo
    if (!this.data.canIUse && userInfo) {
      db.collection('user').add({
        data: {
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
          age: userInfo.gender
        }
      }).then(res => {
        db.collection('user').doc(res._id).get().then(res => {

          // 将用户数据设置全局
          app.userInfo = Object.assign(app.userInfo, res.data)
          this.setData({
            username: app.userInfo.nickName,
            userimg: app.userInfo.avatarUrl,
            canIUse: true
          })
        })
      })
    }
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
    wx.cloud.callFunction({
      name:'login',
      data:{}
    }).then(res=>{
      const openid=res.result.openid
      db.collection('user').where({
        _openid:openid
      }).get().then(res=>{
        app.userInfo=Object.assign(app.userInfo,res.data[0])
        this.setData({
          username: app.userInfo.nickName,
          userimg: app.userInfo.avatarUrl,
          canIUse: true
        })
      })
    })
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