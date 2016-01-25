/**
 * Created by romab on 10.12.2015.
 */
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3030;
var mongoose = require('mongoose');
/*var conection1;
 var conection2;*/
var conection;
//mongoose.connect('localhost:27017/test');
//mongoose.connect('localhost', 27017, 'jsPro');

require('./config/development');

mongoose.connect('mongodb://localhost:27017/jsPro');

conection = mongoose.connection;
conection.once('connected', function (db) {
    app.use(express.static(path.join(__dirname, 'public')));

    require('./routes/index')(app);

    app.listen(port, function () {
        console.log('Server start success = ' + port);
    });
});
conection.on('error', function (err) {
    console.error(err);

    process.exit(1);
});


