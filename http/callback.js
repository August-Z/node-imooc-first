function learn (something) {
  console.log(something)
}

function we (callback, something) {
  callback(something += ' is cool')
}

// 具名函数
we(learn, 'August')

// 匿名函数
we(function (something) {
  console.log(something)
}, ' Jade')