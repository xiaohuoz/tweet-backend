var express = require('express');
var router = express.Router();
var DB = require('../lib/Dao').DB;
var blog = DB('blog');
var {ObjectId} = require('mongodb');
/* GET users listing. */
router.route('/').all(function(req,res,next){
	//todo权限
	next();
}).get(function(req, res, next) {
	blog.find({},function(docs){
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
	const content = req.body.content
    const title = req.body.title
    const type = req.body.type
    blog.insert({'time':new Date(),'title':title,'content':content,'type':type},function(docs){
		res.json({'success':true,'data':docs});
	},function(err){
		throw err;
	})
}).delete(function(req, res, next) {
	blog.remove({'_id': ObjectId(req.body._id)},function(docs){
		res.json({'success':true,'data':docs});
	})
});

module.exports = router;
