FbApp.ChartModel = Backbone.Model.extend({
	
	defaults: {
	    
  	},

	initialize : function(options){
		 _.extend(this,options || {});
		 this.collection.on('reset', this.processData , this);
		 this.arr = [];
	},


	processData : function(collection){
		throw new Error(".processData NOT IMPLEMENTED");
	}


});
