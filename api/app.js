var express = require("express");

var app = express();

app.get('/', function(req, res) {
    res.send('Hello App');
})

app.post('/register', function(req, res) {
    res.send('Hello Post');
})

var server = app.listen(8081, function() {
    console.log('app is listening');
})
