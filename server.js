var express = require("express")
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
let port = 4000;

app.use(cors())

const users = {
  1: {
    name: "Tom"
  },
  2: {
    name: "Jerry"
  }
}


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/users', function (req, res, next) {
  res.json(users)
});


app.get('/users/:id', function (req, res, next) {
  let user = users[req.params.id];
  res.json(user)
});


app.patch('/users/:id', function (req, res,next) {
  console.log("PATCH: ", req.body, req.params);

  users[req.params.id].name = req.body.name;  // update (only for demo)
});


app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`)
})

