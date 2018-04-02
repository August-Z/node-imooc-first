const events = require('events')
const eventEmitter = new events.EventEmitter()

eventEmitter.on('hello-world', (name) => {
  console.log('hello world! My name is ' + name)
})

eventEmitter.once('only-one', (num) => {
  console.log('only-one ' + num)
  clearInterval(timer)
})

eventEmitter.addListener('event loop', (val) => {
  console.log(val)
})

setTimeout(() => {
  eventEmitter.emit('hello-world', 'August')
})

let i = 0
let timer = setInterval(() => {
  eventEmitter.emit('only-one', ++i)
}, 500)

setInterval(() => {
  eventEmitter.emit('event loop', ++i)
}, 500)

console.log(eventEmitter.listenerCount())