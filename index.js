#! node
console.log("hello cli!")
const fileManager = require("./file-manager")
const path = require("path")
const initPath = ''

fileManager.init()
let fromdir = path.join(__dirname, 'templates')
let todir = path.join(initPath)
console.log("dir:", fromdir)

fileManager.mkdir(initPath, function () {
  fileManager.copyFolder(fromdir, todir)
})