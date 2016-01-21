/**
 * Created by romab on 10.12.2015.
 */
var express = require('express');
var app = express();
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
    console.log('----- Connected -----');

    var Schema = mongoose.Schema;
    var useeSchema = new Schema({
        _id        : Number,
        name       : {
            first: String,
            last : String
        },
        dateOfBirth: {type: Date, default: Date.now},
        friends    : [{type: Number, ref: 'user'}]
    });
    var User = mongoose.model('user', useeSchema);

    function modifireMidlware(req, res, next) {
        req.myVar = 'sdfsdf';
        next();
    };

    app.post('/user', function (req, res, next) {
        var user = new User({name: 'VasyPupkin', age: 24});

        user.save(function (eer, user) {
            console.log(user.age);

            res.status(200).send(user);
        });
    });

    app.get('/', function (req, res, next) {
        User.aggregate([{
                $unwind: {
                    path                      : '$friends',
                    preserveNullAndEmptyArrays: true
                }
            }, {
                $lookup: {
                    from        : 'users',
                    localField  : 'friends',
                    foreignField: '_id',
                    as          : 'friends'
                }
            }, {
                $project: {
                    _id        : 1,
                    name       : 1,
                    dateOfBirth: 1,
                    friends    : {$arrayElemAt: ['$friends', 0]}
                }
            }, {
                $group: {
                    _id        : '$_id',
                    friends    : {$push: '$friends'},
                    name       : {$first: '$name'},
                    dateOfBirth: {$first: '$dateOfBirth'}
                }
            }, {$match: {_id: 5}}])
            .exec(function (err, users) {
                if (err) {
                    return next(err);
                }
                res.status(200).send(users);
            });

        //find findOne, update, remove, findByIdAndUpdate, findByIdAndRemove,
    });

    app.listen(port, function () {
        console.log('Server start success = ' + port);
    });
});
conection.on('error', function (err) {
    console.error(err);

    process.exit(1);
});

/*conection1 = mongoose.createConnection(process.env.DB_HOST, parseInt(process.env.DB_PORT), process.env.DB_NAME);
 conection2 = mongoose.createConnection(process.env.DB_HOST, parseInt(process.env.DB_PORT), 'test');

 conection1.once('connected', function(db){
 console.log('----- Connected -----');

 function modifireMidlware(req, res, next){
 req.myVar = 'sdfsdf';
 next();
 };


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
 });
 conection1.on('error', function(err){
 console.error(err);

 process.exit(1);
 });

 conection2.once('connected', function(db){
 console.log('----- Connected 2-----');

 });
 conection2.on('error', function(err){
 console.error(err);

 process.exit(1);
 });*/


