/*
 * @Author: ebinhon 
 * @Date: 2017-11-24 16:54:56 
 * @Last Modified by: ebinhon
 * @Last Modified time: 2017-11-24 16:55:16
 */

var APP_ID = '4vl3Ec7FdH0u7MHG299SjF1Y-gzGzoHsz'
var APP_KEY = 'z8AK3qYrctYaVdSTWtAMKbP0'
var AV = require('leancloud-storage')

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
})

export default AV