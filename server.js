var path = require('path')
var express = require('express')
var AV = require('leanengine')

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || '4vl3Ec7FdH0u7MHG299SjF1Y-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'z8AK3qYrctYaVdSTWtAMKbP0',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'QhzeT3Bunemox1kX9OQIAO4A'
});

var app = express()

app.use(AV.express())

app.use('/', express.static(__dirname + '/build'));

app.get('/*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(3003, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:3003')
})
