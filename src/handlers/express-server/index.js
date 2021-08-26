const serverlessHttp = require('serverless-http');
const express = require('express');

const app = express();

app.get('/search', function (req, res) {
  console.log('request: ', req);

  res.send('Search!');
});

app.get('*', function (req, res) {
  console.log('request: ', req);

  res.send('Hello World!');
});

module.exports = serverlessHttp(app);
