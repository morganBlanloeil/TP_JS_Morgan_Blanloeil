FbApp.ChartModel = Backbone.Model.extend({
	
	initialize : function(options){
		 _.extend(this,options || {});
		 this.collection.on('reset', this.processData , this);
		 this.arr = [];
	},


	processData : function(collection){
		throw new Error(".processData NOT IMPLEMENTED");
	}


});
