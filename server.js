//requires
var express = require('express');
var app = express();
var path = require('path');

//globals
var port = 3000;

//use

//apps - listen, GET
app.listen(port, function(){
    console.log('listening on:', port);
});

app.get('/', function (req, res){
    console.log('brower action makes this GET, logs on terminal');
});