var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 80;

app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send({
  status: 'ok',
  method: 'GET',
  params: req.params,
  query: req.query,
  body: req.body,
}));

app.post('/post', (req, res) => res.status(200).send({
  status: 'ok',
  method: 'POST',
  params: req.params,
  query: req.query,
  body: req.body,
}));


// start the server
app.listen(port);

console.log('Server started! At http://localhost:' + port);
