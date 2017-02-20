var DB = require('../lib/Dao').DB;
var user = DB('blog');

function insert(){
	user.insert({'time':new Date(),'title':'123','contentUrl':'12','keyword':[1,2,3]},function success(){
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