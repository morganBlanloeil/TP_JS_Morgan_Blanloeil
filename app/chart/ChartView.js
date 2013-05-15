FbApp.ChartView = Backbone.View.extend({
	events:{

  },
  
  initialize: function(){
      this.model.on('change : charData' , this.render,this);
  },

  render : function(tab){
    console.log(tab);
  }

});

