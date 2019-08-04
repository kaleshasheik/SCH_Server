const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
var mysql      = require('mysql');

// create express app
const app = express();

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : '', //mysql database password
  database : 'test' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})
//end mysql connection

app.use(cors()) // Use this after the variable declaration

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

require('./app/routes/routes.js')(app);

app.get('/', (req, res) => {
    res.json({"message": "Welcome to my portal."});
});

// listen for requests
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});