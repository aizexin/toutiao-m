/**
 * 用户相关的请求模块
 */
import request from '../utils/request'

/**
 * 用户登录
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
// 每个手机号每分钟只发送一次
export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
