var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let hotelApi=require('./routes/router')
app.use('/api',hotelApi);

app.listen(2000, () => {
  console.log("Server is listening on port 2000");
});

module.exports = app;
