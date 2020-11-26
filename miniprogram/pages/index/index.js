// pages/shopCart/shopCart.js
const db = wx.cloud.database()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    itemList: '',
    search: ''
  },
  // 搜索功能
  seach: function () {
    if (this.data.search) {
      wx.navigateTo({
        url: `/pages/seache/seache?id=${this.data.search}`,
      })
    }
  },

  bindName(e) {
    this.setData({
      search: e.detail.value
    })
  },
  router: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/shopDetail/shopDetail?id=${id}`,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.cloud.callFunction({
      name: 'login',
      data: {}
    }).then(res => {
      db.collection('splb1').get({}).then(res => {
        this.setData({
          itemList: res.data
        })
      })
    })

  },
})