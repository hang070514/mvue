/**
 * Created by zhang on 2020/3/27.
 */
const isPro = Object.is(process.env.NODE_ENV,'production')
const isDev = Object.is(process.env.NODE_ENV,'development')
console.log('isPro====',isPro);
console.log('isDev====',isDev);
module.exports = {
  baseUrl:isPro ? 'http://apis.map.qq.com/ws/geocoder/v1/?' : '/api'
}
