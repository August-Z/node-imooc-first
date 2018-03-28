var num = 0;

function printIt () {
  console.log(num)
}

function plus () {
  setTimeout(function () {
    num++
  }, 0)
}

plus();
printIt();