const Readable = require('stream').Readable;
const Writable = require('stream').Writable;

const readStream = new Readable();
const writStream = new Writable();

readStream.push('I ');
readStream.push('Love ');
readStream.push('August');
readStream.push(null);   // push null 告知可写流没有数据了

writStream._write = (chunk, encoding, callback) => {
  console.log(chunk.toString())
  callback()
}

readStream.pipe(writStream)