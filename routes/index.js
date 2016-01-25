/**
 * Created by romab on 10.12.2015.
 */
module.exports = function(app){
    var bodyParser = require('body-parser');
    var userRouter = require('./user');

    app.use(bodyParser.json());
    app.get('/', function(req, res, next){
        res.status(200).sendfile('index.html');
    });

    app.use('/user', userRouter);

};