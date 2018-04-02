const https = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('ssh_key.pem'),
  cert: fs.readFileSync('ssh_cert_pem')
}

https
  .createServer(options, (req, res) => {
    res.writeHead(200)
    res.end('Hello HTTPS!')
  })
  .listen(6666)