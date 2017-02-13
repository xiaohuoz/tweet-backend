var Vue = require('vue');

Vue.component('my-component', {
	template: '<div>A custom component!</div>'
});
$.ajax({
	url:'lists',
	type:'get',
	success:function(result){
		console.log(result);
		var app = new Vue({
		  el: '#app',
		  data: {
		    todos:result,
		    input:""
		  },
		  methods:{
		  	submitInfo:function(){
		  		console.log(this.input);
		  		$.ajax({
		  			url:"/lists",
		  			type:"post",
		  			data:{
		  				info:this.input
		  			},success:function(result){
		  				console.log(result);
		  				location.reload();
		  			}
		  		});
		  	}
		  }
		});
		console.log(app);
	},error:function(err){
		console.log(err);
	}
});