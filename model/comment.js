var DB = require('../lib/Dao').DB;
var user = DB('comment');

function insert(){
	user.insert({'BlogId':'1','content':'123456','name':'cz','time':new Date()},function success(){
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