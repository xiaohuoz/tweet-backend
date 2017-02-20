var DB = require('../lib/Dao').DB;
var user = DB('tweet');

function insert(){
	user.insert({'time':new Date(),'content':'4567890','type':''},function success(){
		console.log('insert success');
	},function err(err){
		throw err;
	});
}
function remove(){
	user.remove({},function success(docs){
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
// find();
// insert();