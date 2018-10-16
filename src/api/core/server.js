
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
const HOST_DEV = 'https://1o1.cc' // eslint-disable-line
const HOST_PROD = 'https://xthapi-prod.isagr.com' // eslint-disable-line
fly.config.baseURL = HOST_DEV

// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['Authorization'] = `Bearer ${wx.getStorageSync('access_token')}`
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
    console.log('login', response)
    // 只将请求结果的data字段返回
    if (response.status === 200) {
      return response.data
    } else {
      wx.hideLoading()
      wx.showToast({
        title: typeof (response.message) === 'string' ? response.message : '系统出错',
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

// fly.interceptors.request.use((config, promise) => {
//   config.headers['X-Tag'] = 'flyio'
//   return config
// })

export default function flyio (url, params, config) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    fly.request(url, params, config).then((response) => {
      wx.hideLoading()
      if (response) {
        resolve(response)
      } else if (response.access_token) { // for login
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
