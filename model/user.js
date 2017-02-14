var DB = require('../lib/Dao').DB;
var user = DB('user');

function insert(){
	user.insert({'user_name':'cz','password':'123456'},function success(){
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
find();
// insert();