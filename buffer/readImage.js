const fs = require('fs')

fs.readFile('./module.jpg', (err, data) => {
  if (err)
    console.log(err)

  const base64ImageUrl = data.toString('base64')
  const buf = new Buffer(base64ImageUrl, 'base64')

  fs.writeFile('./module_copy.jpg', base64ImageUrl, (err) => {
    if (err) console.log(err)
  })

  console.log(base64ImageUrl)

})

