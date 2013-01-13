var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

app.use(express.logger());

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(port);
