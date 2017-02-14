var express = require('express');
var router = express.Router();
var DB = require('../lib/Dao').DB;
var user = DB('user');
/* GET users listing. */
router.route('/').all(function(req,res,next){
	//todo权限
	next();
}).get(function(req, res, next) {
	user.find({},function(docs){
		res.json(docs);
	},function(err){
		throw err;
	})
}).post(function(req, res, next) {
	res.send('post');
}).put(function(req, res, next) {
  user.insert({name:"1323"},function(docs){
		res.json(docs);
	},function(err){
		throw err;
	})
}).delete(function(req, res, next) {
	res.send('delete');
});

module.exports = router;
