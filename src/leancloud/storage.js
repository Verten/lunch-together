/*
 * @Author: ebinhon 
 * @Date: 2017-11-24 16:54:56 
 * @Last Modified by: ebinhon
 * @Last Modified time: 2017-11-29 21:32:08
 */
// import Order from './models/order'
import AV from 'leancloud-storage'
const APP_ID = '4vl3Ec7FdH0u7MHG299SjF1Y-gzGzoHsz'
const APP_KEY = 'z8AK3qYrctYaVdSTWtAMKbP0'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'QhzeT3Bunemox1kX9OQIAO4A',
})

// AV.Object.register(Order)

export default AV
