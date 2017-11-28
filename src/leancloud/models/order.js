/* eslint  space-before-blocks: 0 */
import AV from 'leancloud-storage'

export const OrderQuery = new AV.Query('Order')
export default class Order extends AV.Object {}
