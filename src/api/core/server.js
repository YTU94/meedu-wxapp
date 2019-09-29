var Fly = require("flyio/dist/npm/wx")
var fly = new Fly()

fly.config.baseURL = process.env.API
// fly.config.header['content-type'] = 'application/json'
// 添加请求拦截器
fly.interceptors.request.use(request => {
  // 给所有请求添加自定义header
  request.headers["content-type"] = "application/json"
  request.headers["Authorization"] = `Bearer ${wx.getStorageSync("access_token")}`
  request.headers["third-session"] = wx.getStorageSync("thirdSession") || ""
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
  response => {
    // 只将请求结果的data字段返回
    if (typeof response.data === "string") {
      wx.showToast({
        title: "请使用账号登录",
        icon: "none",
        duration: 1500,
        success: () => {
          setTimeout(() => {
            wx.redirectTo({
              url: "/pages/login/main"
            })
          }, 1500)
        }
      })
    } else if (response.status === 200 || response.status === 201) {
      return response.data
    } else {
      wx.hideLoading()
      wx.showToast({
        title: typeof response.message === "string" ? response.message : "系统出错",
        icon: "none",
        duration: 1000
      })
      return Promise.reject(response)
    }
  },
  error => {
    console.log("error", error)
    wx.hideLoading()
    wx.showToast({
      title: "未知错误",
      icon: "none",
      mask: true
    })
    console.log(error)
    // 发生网络错误后会走到这里
    return Promise.reject(error)
  }
)

export default function flyio(url, params, config) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: "加载中",
      mask: true
    })
    fly.request(url, params, config).then(
      response => {
        wx.hideLoading()
        if (response) {
          resolve(response)
        } else if (response.access_token) {
          // for login
          resolve(response)
        } else {
          wx.showToast({
            title: typeof response.messages === "string" ? response.messages : "系统出错",
            icon: "none",
            duration: 1000
          })
        }
      },
      err => {
        console.log(err, "err")
        reject(err.response)
      }
    )
  })
}
