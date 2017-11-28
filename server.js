var path = require('path')
var express = require('express')
var webpack = require('webpack')
var AV = require('leanengine')
var config = require('./webpack.dev.config')

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || '4vl3Ec7FdH0u7MHG299SjF1Y-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'z8AK3qYrctYaVdSTWtAMKbP0',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'QhzeT3Bunemox1kX9OQIAO4A'
});

var app = express()
var compiler = webpack(config)

app.use(AV.express())

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
)

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})

app.listen(3003, function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3003')
})
