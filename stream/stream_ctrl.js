const fs = require('fs')
const readStream = fs.createReadStream('./music.m4p')
const writeStream = fs.createWriteStream('./music_copy.m4p')

/**
 * Readable 为可读流，外部来源的数据会被存储在内部的 Buffer 里缓存
 * 分为两种状态：pause 与 resume ，暂停与流动
 *
 * Writable 为可写流，消费数据。从可读流里获取数据后对其中的 Buffer 进行处理
 *
 * Duplex 为双工流，同时实现 Readable、Writable 的流。
 * 既可以作为上游生产数据，也可以作为下游消费数据
 *
 * Transform 转换流、也是一个双工流，类似解压缩等工作，gulp 就是经典的转换流
 */

readStream
  .on('data', (chunk) => {
    if (!writeStream.write(chunk)) {
      readStream.pause()
      console.log('still cached')
    }
  })
  .on('end', () => {
    writeStream.end()
  })

writeStream
  .on('drain', () => {
    readStream.resume()
    console.log('data drain')
  })
