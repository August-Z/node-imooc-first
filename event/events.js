const events = require('events')
const eventEmitter = new events.EventEmitter()

eventEmitter.on('hello-world', (name) => {
  console.log('hello world! My name is ' + name)
})

setTimeout(() => {
  eventEmitter.emit('hello-world', 'August')
})
