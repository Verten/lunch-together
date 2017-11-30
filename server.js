let path = require('path')
let express = require('express')
let AV = require('leanengine')

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || '4vl3Ec7FdH0u7MHG299SjF1Y-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'z8AK3qYrctYaVdSTWtAMKbP0',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'QhzeT3Bunemox1kX9OQIAO4A',
})

let app = express()

app.use(AV.express())

app.use('/', express.static(path.resolve(__dirname, 'build')))

app.get('/*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(process.env.LEANCLOUD_APP_PORT || 3000, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:3000')
})
