var DB = require('../lib/Dao').DB;
var user = DB('tweet');
var {ObjectId} = require('mongodb');

function insert(){
	user.insert({'time':new Date(),'content':'4567890','type':''},function success(){
		console.log('insert success');
	},function err(err){
		throw err;
	});
}
function remove(){
	user.remove({'_id':ObjectId("58aa983f9edf6326808d0000")},function success(docs){
		console.log(docs);
	},function fail(err){
		console.log(err);
	});
}
function find(){
	user.find({},function success(docs){
		console.log(docs);
	},function fail(err){
		console.log(err);
	});
}
// remove();
// find();
insert();
// console.log(mongodb);