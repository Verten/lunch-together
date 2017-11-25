/*
 * @Author: ebinhon 
 * @Date: 2017-11-24 16:54:56 
 * @Last Modified by: ebinhon
 * @Last Modified time: 2017-11-25 10:44:26
 */

const APP_ID = '4vl3Ec7FdH0u7MHG299SjF1Y-gzGzoHsz'
const APP_KEY = 'z8AK3qYrctYaVdSTWtAMKbP0'
const AV = require('leancloud-storage')

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
})

export default AV