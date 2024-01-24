import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://send-mail-iota.vercel.app/', // 设置基础 URL
  timeout: 5000, // 设置超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded' // 例如设置默认的 Content-Type
  }
})

export { instance }
