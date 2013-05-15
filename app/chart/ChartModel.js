FbApp.ChartModel = Backbone.Model.extend({
	
	/*On récupère les options 
	et on écoute sur la collection si elle change*/
	initialize : function(options){
		 _.extend(this,options || {});
		 this.collection.on('reset', this.processData , this);
		 this.arr = [];
	},


	/**
		Méthode qui va former les datas pour envoyer aux graphiques
	*/
	processData : function(collection){
		throw new Error(".processData NOT IMPLEMENTED");
	}


});
