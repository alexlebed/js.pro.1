/**
 * Created by romab on 10.12.2015.
 */
var http = require('http');

var server;

server = http.createServer(function(req, res){
    var url = req.url.split('/');
    var masterUrl = url[1];

    var enumForUrl = {
        hello: hello
    };

    if(enumForUrl[masterUrl]){
        enumForUrl[masterUrl](res);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end('Page not found');
    }


    function hello(res){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end('Hello world');
    }

});

server.listen(3030, function(){
    console.log('Server is listening on 3030 port');
});