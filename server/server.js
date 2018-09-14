require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controller");
const app = express();

const {CONNECTION_STRING} = process.env

app.use(bodyParser.json());


massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);  
  })
  .catch(err => {
    console.log(err);
  });


app.post('/api/create', controller.create)
app.post('/api/login', controller.login)

app.get('/api/posts', controller.getAll)
app.get('/api/post/:id', controller.getOne)

app.post('/api/post/:id', controller.createPost)

const PORT = 4000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))