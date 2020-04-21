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
    }),
	wx.previewImage({
	  current: 'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
	  urls: [ // 所有图片的URL列表，数组格式
	    'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
	    'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
	    'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
	  ],
	  success: function(res) {
	    console.log(res)
	  }
	})
  }
})