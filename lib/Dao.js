var mongodb = require('mongodb');
var config = require('./config').DB;

var d = new mongodb.Db(
	config.name,
	new mongodb.Server(
		config.host,
		config.port,
		{auto_reconnect : true}
	),
	{safe : true}
);
function connect(col, fn){
	d.open(function(err, db){
		if(err)
			throw err;
		else
			db.collection(col,function(err, col){
				if(err)
					throw error;
				else
					fn&&fn(col,db)
			});
	});
}
exports.DB = function(col){
	return {
		insert : function(data,success,fail){
			connect(col,function(col,db){
				col.insert(data,function(err, docs){
					if(err)
						fail && fail(err);
					else{
						col.find({}).toArray(function(err,docs){
							if(err)
								fail && fail(err);
							else
								success && success(docs);
							db.close();
						});
					}
				})
			})
		},
		remove : function(data,success,fail){
			connect(col,function(col,db){
				col.remove(data,function(err, len){
					if(err)
						fail && fail(err);
					else{
						col.find({}).toArray(function(err,docs){
							if(err)
								fail && fail(err);
							else
								success && success(docs);
							db.close();
						});
					}
				})
			})
		},
		update : function(con,doc,success,fail){
			connect(col,function(col,db){
				col.update(con,doc,function(err, len){
					if(err)
						fail && fail(err);
					else{
						col.find({}).toArray(function(err,docs){
							if(err)
								fail && fail(err);
							else
								success && success(docs);
							db.close();
						});
					}
				})
			})
		},
		find : function(con,success,fail){
			connect(col,function(col,db){
				col.find(con).toArray(function(err,docs){
					if(err)
						fail && fail(err);
					else
						success && success(docs);
					db.close();
				});
			})
		}
	}
}