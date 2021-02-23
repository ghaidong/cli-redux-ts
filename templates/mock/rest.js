var mockdata = require("./mockdata");
var bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/rest', function (req, res) {
    console.log("getGql_customcustomcustom:", new Date())
    res.json({ custom: 'response1-graphql' });
  });

  app.post("/rest", (req, res) => {
    console.log("mock_graphqlHead:", res.body)
    console.log("mock_graphql:", req.body)

    // mockdata.execute("getUserInfo", req, res)
    mockdata.execute("TodoApp", req, res)
  })
}


