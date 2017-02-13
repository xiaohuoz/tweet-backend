var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/mydb';

module.exports = {
	"GET /lists":function(req,res){
		MongoClient.connect(url, function(err, db) {
			assert.equal(null, err);
			console.log("Connected correctly to server");
			getUserList(db, function(result) {
				res.send(result);
			});
		});
	},
	"Post /lists":function(req,res){
		var info = req.body.info;
		var user = {};
		user.text = info;
		MongoClient.connect(url, function(err, db) {
			assert.equal(null, err);
			console.log("Connected correctly to server");
			addUser(user,db,function(){
				console.log("添加成功");
				res.send({"success":true,message:"添加成功"});
			});
		});
	},
	"Put /lists":function(req,res){
		res.send("4567890");
	},
	"Delete /lists":function(req,res){
		res.send("4567890");
	}
}
function getUserList(db,callback){
	var collection = db.collection('user');
	collection.find({}).toArray(function(err, docs){
		assert.equal(err, null);
	    callback(docs);
	})
}
function deleteUser(db,callback){
	var collection = db.collection('user');
	collection.find({}).toArray(function(err, docs){
		assert.equal(err, null);
	    callback(docs);
	})
}
function addUser(user,db,callback){
	var collection = db.collection('user');
	collection.insert(user);
	callback();
}