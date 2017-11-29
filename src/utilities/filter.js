export default (Vue) => {
  // get a string representing the date portion of the given Date
  Vue.filter('formatDate', date => {
    return new Date(date).toLocaleDateString()
  })
}
