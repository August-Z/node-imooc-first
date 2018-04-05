const fs = require('fs')
const source = fs.readFileSync('./module.jpg')

fs.writeFile('stream_copy.jpg', source)