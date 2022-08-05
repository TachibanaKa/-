// 原生websocket基础封装
// // 发起连接
// socket.init()

// // 发送数据
// socket.send({test:123}, () => {console.log('这是回调函数，发送test 123后执行')})

// // 断开连接
// socket.close()

// // 重新连接
// socket.reconnect()


// import Api from './api'
// const api = new Api()

// socket主要对象
export default class Socket {
  websock = null
  ws_url = 'ws://192.168.0.22:8080/websocket'
  // 开启标识
  socket_open = false
  // 心跳timer
  hearbeat_timer = null
  // 心跳发送频率
  hearbeat_interval = 5000

  // 是否自动重连
  is_reonnect = false
  // 重连次数
  reconnect_count = 3
  // 已发起重连次数
  reconnect_current = 1
  // 重连timer
  reconnect_timer = null
  // 重连频率
  reconnect_interval = 3000

  /**
   * 初始化连接
   */
  init() {
    const _this = this
    if (!('WebSocket' in window)) {
      console.log('浏览器不支持WebSocket')
      return null
    }

    // 已经创建过连接不再重复创建
    if (this.websock) {
      return this.websock
    }

    this.websock = new WebSocket(this.ws_url)
    this.websock.onmessage = function(e) {
      _this.receive(e)
    }

    // 关闭连接
    this.websock.onclose = function(e) {
      console.log('连接已断开')
      console.log('connection closed (' + e.code + ')')
      clearInterval(_this.hearbeat_interval)
      _this.socket_open = false

      // 需要重新连接
      if (_this.is_reonnect) {
        _this.reconnect_timer = setTimeout(() => {
          // 超过重连次数
          if (_this.reconnect_current > _this.reconnect_count) {
            clearTimeout(_this.reconnect_timer)
            _this.websock = null
            return
          }

          // 记录重连次数
          _this.reconnect_current++
          _this.reconnect()
        }, _this.reconnect_interval)
      } else {
        _this.websock = null
      }
    }

    // 连接成功
    this.websock.onopen = function() {
      console.log('连接成功')
      _this.socket_open = true
      _this.is_reonnect = true
      // 开启心跳
      _this.heartbeat()
    }

    // 连接发生错误
    this.websock.onerror = function() {
      console.log('WebSocket连接发生错误')
      clearInterval(_this.hearbeat_interval)
      _this.socket_open = false

      // 需要重新连接
      if (_this.is_reonnect) {
        _this.reconnect_timer = setTimeout(() => {
          // 超过重连次数
          if (_this.reconnect_current > _this.reconnect_count) {
            clearTimeout(_this.reconnect_timer)
            _this.websock = null
            _this.unconnect()
            return
          }

          // 记录重连次数
          _this.reconnect_current++
          _this.reconnect()
        }, _this.reconnect_interval)
      } else {
        _this.websock = null
        _this.unconnect()
      }
    }
  }
  /**
   * 返回当前是否登录
   */
  loginState() {
    let state = false
    if (this.websock) {
      state = true
    }
    return state
  }

  /**
   * 被动断开连接处理
   */
  unconnect() {
    console.log('出现错误，连接被断开！')
  }

  /**
   * 发送消息
   * @param {*} data 发送数据
   * @param {*} callback 发送后的自定义回调函数
   */
  send(data, callback = null) {
    // 开启状态直接发送
    if (this.websock.readyState === this.websock.OPEN) {
      this.websock.send(JSON.stringify(data))

      if (callback) {
        callback()
      }

      // 正在开启状态，则等待1s后重新调用
    } else if (this.websock.readyState === this.websock.CONNECTING) {
      setTimeout(function() {
        this.send(data, callback)
      }, 1000)

      // 未开启，则等待1s后重新调用
    } else {
      this.init()
      setTimeout(function() {
        this.send(data, callback)
      }, 1000)
    }
  }

  /**
   * 接收消息
   * @param {*} message 接收到的消息
   */
  receive(message) {
    if (!message) {
      console.log('收到服务器空内容')
      return false
    }
    console.log('收到服务器内容：', message.data)

    // api[data.type] && api[data.type](data)
  }

  /**
   * 心跳
   */
  heartbeat() {
    console.log('socket', 'ping')
    if (this.hearbeat_timer) {
      clearInterval(this.hearbeat_timer)
    }

    this.hearbeat_timer = setInterval(() => {
      const data = {
        kind: 0,
        'API-Token': 'token'
      }
      this.send(data)
    }, this.hearbeat_interval)
  }

  /**
   * 主动关闭连接
   */
  close() {
    console.log('主动断开连接')
    clearInterval(this.hearbeat_timer)
    this.is_reonnect = false
    this.websock.close()
  }

  /**
   * 重新连接
   */
  reconnect() {
    console.log('发起重新连接', this.reconnect_current)

    if (this.websock && this.socket_open) {
      this.websock.close()
    }

    this.init()
  }
}
