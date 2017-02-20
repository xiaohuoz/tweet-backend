var express = require('express');
var router = express.Router();
var DB = require('../lib/Dao').DB;
var tweet = DB('tweet');
var {ObjectId} = require('mongodb');
/* GET users listing. */
router.route('/').all(function(req,res,next){
	//todo权限
	next();
}).get(function(req, res, next) {
	tweet.find({},function(docs){
		res.json({
			success:true,
			data:docs
		});
	},function(err){
		throw err;
	})
}).post(function(req, res, next) {
	res.json({success:true});
}).put(function(req, res, next) {
    tweet.insert({name:"1323"},function(docs){
		res.json(docs);
	},function(err){
		throw err;
	})
}).delete(function(req, res, next) {
	console.log(req.body)
	tweet.remove({'_id': ObjectId(req.body._id)},function(docs){
		res.json({'success':true,'data':docs});
	})
});

module.exports = router;
