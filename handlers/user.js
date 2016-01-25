/**
 * Created by romab on 10.12.2015.
 */
var User = function(){
    var mongoose = require('mongoose');
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

    this.create = function(req, res, next){
        var body = req.body;
        var user = new User(body);
        var _id = (global.userId || (global.userId = 1));
        user._id = _id;

        user.save(function (err, _user) {
            if(err){
                return next(err);
            }

            res.status(200).send(_user);
        });
    } ;

    this.updateUser = function(req, res, next){
        var login = req.params.login;
        var weight = req.params.weight;

        res.status(200).send({login: login, weight: weight});
    };

    this.getAll = function(req, res, next){
        console.log(req.myVar);
        res.status(200).send(req.ip);
    }
};

module.exports = User;