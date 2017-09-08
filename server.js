//requires
var express = require('express');
var app = express();
var path = require('path');

//globals
var port = 3000;

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

app.get('/fakeName', function (req, res){
   
    res.send('we set up fakeName');
    //or you could use this! ---> res.sendFile(path.resolve('./public/views/index.html'));
});