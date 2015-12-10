/**
 * Created by romab on 10.12.2015.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 3030;

app.get('/hello', function(req, res, next){
    res.status(200).send('Hello world');
});

app.listen(port, function(){
    console.log('Server start success = ' + port);
});