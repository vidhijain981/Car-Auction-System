
alert("1");
const fs = require('fs-extra')
alert("1");
const file = 'file.txt'
alert("n js");
// With a callback:
var data="hello";
alert("1");
fs.outputFile(file, data.toString('utf8'), err => {
  console.log(err) // => null
alert("1");
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return console.error(err)
    console.log(data) // => hello!


  })
})