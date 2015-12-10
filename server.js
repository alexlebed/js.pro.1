/**
 * Created by romab on 10.12.2015.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3030;

function modifireMidlware(req, res, next){
    req.myVar = 'sdfsdf';
    next();
};

app.use(bodyParser.json());

app.post('/user', function(req, res, next){
    res.status(200).send(req.body);
});
app.use(modifireMidlware);
app.get('/', function(req, res, next){
    console.log(req.myVar);
    res.status(200).send(req.ip);
});

app.listen(port, function(){
    console.log('Server start success = ' + port);
});