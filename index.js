const express = require('express');
const app = express();
var routers = require('./server/routers.js');

var bodyParser = require('body-parser');
var multer = require('multer'); 

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data

app.use(express.static('build'));

var util = require('./util.js');

util.publishRouter(routers,app)

const server = app.listen(3000,function(){
	let host = server.address().address;
	let port = server.address().port;
	console.log('Example app listen at http://%s:%s',host,port);
});