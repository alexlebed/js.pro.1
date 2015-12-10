/**
 * Created by romab on 10.12.2015.
 */
module.exports = (function(){
    var express = require('express');
    var UserHandelr = require('../handlers/user');
    var userRouter = express.Router();
    var userHandler = new UserHandelr();

    userRouter.get('/', userHandler.getAll);
    userRouter.post('/:login/:weight', userHandler.updateUser);
    userRouter.post('/', userHandler.create);


    return userRouter;
})();