/*
 * @Author: ebinhon 
 * @Date: 2017-11-24 16:54:56 
 * @Last Modified by: ebinhon
 * @Last Modified time: 2017-11-26 22:26:16
 */

const APP_ID = '4vl3Ec7FdH0u7MHG299SjF1Y-gzGzoHsz'
const APP_KEY = 'z8AK3qYrctYaVdSTWtAMKbP0'
import AV from 'leancloud-storage'
import Order_User from './models/user'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
})

AV.Object.register(Order_User)

export default AV