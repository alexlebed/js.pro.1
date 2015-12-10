/**
 * Created by romab on 10.12.2015.
 */
module.exports = (function(){
    var express = require('express');

    var userRouter = express.Router();

    userRouter.get('/', function(req, res, next){
        console.log(req.myVar);
        res.status(200).send(req.ip);
    });
    userRouter.post('/:login/:weight', function(req, res, next){
        var login = req.params.login;
        var weight = req.params.weight;

        res.status(200).send({login: login, weight: weight});
    });
    userRouter.post('/', function(req, res, next){
        res.status(200).send(req.body);
    });


    return userRouter;
})();