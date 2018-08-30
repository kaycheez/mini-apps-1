const express = require('express');
const parser = require('body-parser');
const app = express();
var mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost:3000',
  user: 'root',
  database: 'checkout'
})

app.set('port', 3000);

app.use(parser.json());

app.use(express.static(__dirname + '/public/'));

app.listen(app.get('port'));

app.use()

