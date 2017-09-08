//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var gener = require('./modules/random');

//globals
var port = 3000;
var randomNum = 0;

app.use(bodyParser.urlencoded({extended: true}));
//use
app.use(express.static('public'));//client root folder
//apps - listen, GET
app.listen(port, function(){
    console.log('listening on:', port);
});

app.get('/', function (req, res){
    console.log('brower action makes this GET, logs on terminal');

    res.sendFile(path.join(__dirname, './public/views/index.html'));
    //or you could use this! ---> res.sendFile(path.resolve('./public/views/index.html'));
});

app.post('/difficulty', function (req, res){
    var randomNum = req.body.mode;
    console.log('Server is working!,', randomNum);
    console.log(gener(randomNum));
    res.sendStatus(200);
    //or you could use this! ---> res.sendFile(path.resolve('./public/views/index.html'));
});
