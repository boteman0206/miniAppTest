Page({
  data: {
    lag: 0,
    lat: 0
  },
  onLoad: function () {
    this.setData({
      lag: 130.327359,
      lat: 46.80569
    })
    console.log("来到map界面", this.data.lag,  this.data.lat)
  }
})