const fs = require('fs')
const readStream = fs.createReadStream('./module.jpg')

// let n = 0

readStream
  .on('data', (chunk) => {
    console.log(chunk.length / 1024)
  })
  .on('readable', () => {
    console.log('data readable')
  })
  .on('end', () => {
    console.log('data ends')
  })
  .on('close', () => {
    console.log('data close')
  })
  .on('error', (e) => {
    console.log('data read error ' + e)
  })