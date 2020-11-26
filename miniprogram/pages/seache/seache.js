// miniprogram/pages/seache/seache.js
import {
  seach
} from "../utils/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: '',
    search: ''
  },
  seach: function () {
    seach(this.data.search).then(res => {      
      this.setData({
        itemList: res
      })
    })
  },
  router: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/shopDetail/shopDetail?id=${id}`,
    })
  },
  bindName(e) {
    this.setData({
      search: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    seach(options.id).then(res => {      
      this.setData({
        itemList: res
      })
    })
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