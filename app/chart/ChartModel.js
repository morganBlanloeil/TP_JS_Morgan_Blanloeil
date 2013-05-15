FbApp.ChartModel = Backbone.Model.extend({

	//defaults 

	initialize : function(options){
		// _.extend(this,options || {});
		// this.collection.on('reset', this.processData , this);
	},


 	setCollection : function(collection){
		
	},

	processData : function(){
		this.set('charData' ,arr);
		throw new Error(".processData NOT IMPLEMENTED");
	}


});

// this.model.on('change : changeData' , this.render,this);