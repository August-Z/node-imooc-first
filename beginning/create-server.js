var http = require('http');

/**
 * 收到来自 3000 端口的请求后，执行其中的回调函数，
 * 函数分别为
 * req 请求体，从哪来的，GET or POST ??? 等等
 * res 响应体，服务器端返回的信息，比如我们返回一个 Hello world
 */
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end('Hello Node.js\n');
})

server.listen(3000, '0.0.0.0');

console.log('Server running at http://127.0.0.1:3000/')