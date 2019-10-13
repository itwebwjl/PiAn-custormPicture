import axios from 'axios'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css' // Progress 进度条样式

export default {
  // 自定义判断元素类型JS
  toType: function (obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  },
  // 参数过滤函数
  $apiAxios: function (method, url, params = {}, data = null) {
    // NProgress.start()
    const self = this

    const options = {
      'method': method,
      'url': url,
      'params': params,
      'data': data,
      'baseURL': process.env.API_HOST,
      'withCredentials': true
    }

    return new Promise((resolve, reject) => {
      axios.defaults.withCredentials = true
      if (method == 'POST' || method == 'PUT') {
        axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      }
      axios(options).then(function (res) {
        // NProgress.done()
        resolve && resolve(res.data)
      }).catch(function (error) {
        // NProgress.done()
        if (error.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data)
          // console.log(error.response.status)
          // console.log(error.response.headers)
          let msg = `系统错误 => data: ${error.response.data}, status: ${error.response.status}, headers${error.response.headers}|请联系技术人员`
          self.$message.error(msg)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
          self.$message.error(`系统错误 => ${error.message}|请联系技术人员`)
        }
      })
    })
  },
  /*
   接口处理函数
   这个函数每个项目都是不一样的，我现在调整的是适用于
   https://cnodejs.org/api/v1 的接口，如果是其他接口
   需要根据接口的参数进行调整。参考说明文档地址：
   https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
   主要是，不同的接口的成功标识和失败提示是不一致的。
   另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
   */
  filterNull: function (o) {
    for (let key in o) {
      if (o[key] === null) {
        delete o[key]
      }
      if (this.toType(o[key]) === 'string') {
        o[key] = o[key].trim()
      } else if (this.toType(o[key]) === 'object') {
        o[key] = this.filterNull(o[key])
      } else if (this.toType(o[key]) === 'array') {
        o[key] = this.filterNull(o[key])
      }
    }
    return o
  },

  $get: function (url, params, data) {
    return this.$apiAxios('GET', url, params, data)
  },
  $post: function (url, params, data) {
    return this.$apiAxios('POST', url, params, data)
  },
  $put: function (url, params, data) {
    return this.$apiAxios('PUT', url, params, data)
  },
  $del: function (url, params, data) {
    return this.$apiAxios('DELETE', url, params, data)
  }
}
