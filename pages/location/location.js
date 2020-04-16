Page({
  data: {
    lag: 0,
    lat: 0
  },
  onLoad: function () {
    
    console.log("来到location界面", this.data.lag,  this.data.lat),
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log("获取地址信息", res.latitude, res.longitude)
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
        this.setData({
          lag: longitude,
          lat: latitude
        })
      }
    })
  }
})