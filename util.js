function publishRouter(routers,app){
	var r;
	for(router in routers){
		r = router.split(' ');
		switch(r.length){
			case 1 :
				app.get(router,routers[router]);
				break;
			case 2 :
				switch(r[0].toUpperCase()){
					case 'GET':
						app.get(r[1],routers[router]);
						console.log(router + ' success!\n' + routers[router]);
						break;
					case 'POST':
						app.post(r[1],routers[router]);
						console.log(router + ' success!\n');
						break;
					case 'PUT':
						app.put(r[1],routers[router]);
						console.log(router + ' success!\n');
						break;
					case 'DELETE':
						app.delete(r[1],routers[router]);
						console.log(router + ' success!\n');
						break;
				}
				break;
			default:
				console.log('error in '+router+'\n');
				break;
		}
	}
}
module.exports = {
	publishRouter:publishRouter
		
}