const express = require('express');
const app = express();
const parser = require('body-parser');


app.use(parser.json());


app.use(express.static('./client/'));



app.post('/', function(req, res) {
  res.send(req.body);
});

// app.get('/json', function(req, res) {
//   console.log(req.body);
//   res.end();
// });


app.listen(3000);