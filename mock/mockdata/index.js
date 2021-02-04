let dataMap = {
  "TodoApp": "./demo/TodoApp.json",
  "getUserInfo": "./demo/getUserInfo.json",
  "BlackListSearch":"./demo/BlackListSearch"
}

module.exports = {
  execute: (operationName, req, res) => {
    console.log("mockData:", operationName)
    
    let dataPath = dataMap[operationName];
    if (dataPath) {
      res.json(require(dataPath))
    }
  }
}