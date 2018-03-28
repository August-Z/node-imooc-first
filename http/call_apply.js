var cat = {
  words: '...',
  speak: function (say) {
    console.log(say + ' ' + this.words)
  }
}

cat.speak('cat say')

var dog = {
  words: 'wang'
}

// 通过 call 方法赋予 this
cat.speak.call(dog, 'dog say')