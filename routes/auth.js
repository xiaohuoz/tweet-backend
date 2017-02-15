var express = require('express');
var router = express.Router();
var DB = require('../lib/Dao').DB;
var user = DB('user');
/* GET users listing. */
router.route('/').post(function(req, res, next) {
	var data = req.body;
	console.log(data);
	for(var key in  req.cookies){
	    res.write("cookie名:"+key);
	    res.write(",cookie值:"+req.cookies[key]+"<br />");
	}
	if(!(data.user_name && data.password)){
		res.send('请输入用户名和密码');
	}else{
		user.find(data,function(docs){
		if(docs.length == 0){
			res.send({
				success:false,
				message:"用户名或密码错误"
			});
		}else{
			res.json({
				success:true,
				message:"登录成功"
			});
		}
		},function(err){
			throw err;
		})
	}
});

module.exports = router;