var http = require('http')
var url = 'http://www.baidu.com/'

http.get(url, function (res) {

  var html = ''

  res.on('data', function (data) {
    console.log(data + '')
  })

})
