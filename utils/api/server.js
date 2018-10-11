var Fly = require('./wx')
var fly = new Fly()

fly.config.baseURL = 'http://47.92.217.9:9090'


// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['X-Tag'] = 'flyio'
  request.headers['third-session'] = wx.getStorageSync('thirdSession') || ''
  // 打印出请求体
  console.log(request.body)
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))
  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    // 只将请求结果的data字段返回
    if (response.data.success) {
      return response.data
    } else {
      wx.showToast({
        title: typeof (response.data.message) === 'string' ? response.data.message : '系统出错',
        icon: 'none',
        duration: 1000
      })
      return Promise.reject(response)
    }
  },
  (error) => {
    console.log(error)
    // 发生网络错误后会走到这里
    return Promise.reject(error)
  }
)

fly.interceptors.request.use((config, promise) => {
  config.headers['X-Tag'] = 'flyio'
  return config
})

const flyio = function (url, params, config) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    fly.request(url, params, config).then((response) => {
      wx.hideLoading()
      if (response.success) {
        resolve(response)
      } else {
        wx.showToast({
          title: typeof (response.messages) === 'string' ? response.messages : '系统出错',
          icon: 'none',
          duration: 1000
        })
      }
    }, (err) => {
      reject(err)
    })
  })
}

export default flyio
