/**
 * Created by romab on 10.12.2015.
 */
var User = function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var useeSchema = new Schema({
        _id        : Number,
        age        : Number,
        firstName  : String,
        lastName   : String,
        dateOfBirth: {type: Date, default: Date.now},
        friends    : [{type: Number, ref: 'user'}]
    });
    var User = mongoose.model('user', useeSchema);

    this.create = function (req, res, next) {
        var body = req.body;
        var user = new User(body);
        var _id = global.userId ? ++global.userId : (global.userId = 7);
        user._id = _id;

        user.save(function (err, _user) {
            if (err) {
                return next(err);
            }

            res.status(200).send(_user);
        });
    };

    this.updateUser = function (req, res, next) {
        var id = req.params.id;
        var body = req.body;

        User.findByIdAndUpdate(id, {$set: body}, {new: true}, function (err, user) {
            if (err) {
                return next(err);
            }

            res.status(200).send(user);
        });
    };

    this.getAll = function (req, res, next) {
        User
            .find()
            .exec(function (err, resp) {
                if (err) {
                    return next(err);
                }

                res.status(200).send(resp);
            });
    };

    this.getById = function (req, res, next) {
        var id = req.params.id;

        User
            .findById(id, function (err, resp) {
                if (err) {
                    return next(err);
                }

                res.status(200).send(resp);
            });
    };

    this.removeUser = function (req, res, next) {
        var id = req.params.id;

        User.remove(id, function (err, resp) {
                if (err) {
                    return next(err);
                }

                res.status(200).send(resp);
        });
    }
};

module.exports = User;