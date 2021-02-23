#! node
console.log("hello cli!")


const path = require("path")
const fs = require("fs")
const program = require("commander")

// console.log("path:", path)
// console.log("__dirname:", __dirname)

mkdir('./src', function () {
  copyTemplate('/index.html', './src/index.html')
  // console.log(fs.readFileSync(path.join(__dirname, 'templates', '/index.html'), 'utf-8'))
  // fs.writeFileSync('./src/index.html', fs.readFileSync(path.join(__dirname, 'templates', '/index.html'), 'utf-8'))
})


function copyTemplate(from, to) {
  from = path.join(__dirname, 'templates', from);
  write(to, fs.readFileSync(from, 'utf-8'))
}

function write(path, str, mode) {
  fs.writeFileSync(path, str)
}

function mkdir(path, fn) {
  fs.mkdir(path, function (err) {
    fn && fn()
  })
}




