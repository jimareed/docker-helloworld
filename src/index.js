var express = require('express');
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;
var app = express();
app.get(['/', '/docker-helloworld'], function (req, res) {
  res.send('<html><body><b>Hello World!</b></body></html>\n');
});
app.get('/version', function (req, res) {
  res.send('1.5\n');
});
app.listen(PORT)
console.log('Running on http://localhost:' + PORT);