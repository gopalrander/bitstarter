var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var buff = fs.readFileSync("index.html");
buff.toString('utf-8');

app.get('/', function(request, response) {
response.set('Content-Type', 'text/html');  
response.send(buff);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
