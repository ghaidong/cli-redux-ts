const fs = require("fs")
const path = require("path")

const fileManager = {
  init() {
    console.log("fileManager Ready!!!")
  },

  copyFolder(from, to) {
    let folder = fs.readdirSync(from)
    folder.forEach((file) => {
      let fromPathname = path.join(from, file)
      let toPathname = path.join(to, file)
      if (fs.statSync(fromPathname).isDirectory()) {
        fs.mkdir(toPathname, (err) => {
          if (err) throw { err, fromPathname, toPathname };
          else {
            this.copyFolder(fromPathname,toPathname)
            console.log("mkdirCircle")
          }
        });
      } else {
        this.copyFile(fromPathname, toPathname)
      }
    })
  },

  copyFile(from, to) {
    this.write(to, fs.readFileSync(from, 'utf-8'))
  },

  copyTemplate(from, to) {
    from = path.join(__dirname, 'templates', from)
    this.write(to, fs.readFileSync(from, 'utf-8'))
  },

  write(path, str, mode) {
    fs.writeFileSync(path, str)
  },

  mkdir(path, fn) {
    fs.mkdir(path, function (err) {
      fn && fn()
    })
  \
}

module.exports = fileManager