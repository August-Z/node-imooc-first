const fs = require('fs')

// 使用 pipe 作为流的连接，从而优雅的使用流
fs.createReadStream('./music.m4p')
  .pipe(fs.createWriteStream('./music_pipe.m4p'))