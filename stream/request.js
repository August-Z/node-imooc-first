const http = require('http')
const request = require('request')
const fs = require('fs')

http
  .createServer((req, response) => {
    request('http://193.112.150.195/images/back1.jpg')
      .pipe(response)
  })
  .listen(3000)