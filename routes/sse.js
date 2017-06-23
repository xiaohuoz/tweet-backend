// var http = require('http');
// http.createServer(function(req, res){
//     var fileName = "." + req.url;
//     if(fileName === './stream'){
//         res.writeHead(200, {"Content-Type":"text/event-stream",
//             "Cache-Control":"no-cache",
//             "Connecttion":"keep-alive"})
//         res.write("retry: 10000\n");
//         res.write("event: connecttime\n");
//         res.write("date: " + new Date() + "\n\n");
//         res.write("date: " + new Date() + "\n\n");
//         interval = setTimeInterval(function (){
//             res.write("date: " + new Date() + "\n\n");
//         }, 1000);
//         req.connection.addListener('close', function(){
//             clearInterval(interval);
//         },false);
//     }
// }).listen(80, "127.0.0.1");
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/').all(function(req,res,next){
    console.log('get request!');
    
    next();
}).get(function(req, res, next){
    res.writeHead(200, {"Content-Type":"text/event-stream",
        "Cache-Control":"no-cache",
        "Connecttion":"keep-alive"})
    res.write("id: " + Date.now() + "\ndata: " + message + "\n\n");
    res.write("id: " + Date.now() + "\ndata: " + message + "\n\n");
    interval = setTimeInterval(function (){
        res.write("id: " + Date.now() + "\ndata: " + message + "\n\n");
    }, 1000);
    req.connection.addListener('close', function(){
        clearInterval(interval);
    },false);
})

module.exports = router;