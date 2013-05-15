FbApp.ChartView = Backbone.View.extend({
	events:{

  },
  
  initialize: function(options){
  		_.extend(this,options || {});
  	   this.model.on('change : charData' , this.render , this);
  },

  render : function(tab){
    	var plot2 = jQuery.jqplot (this.nameDiv, [tab.arr], { 
        seriesDefaults: {
          renderer: jQuery.jqplot.PieRenderer, 
          rendererOptions: {
            showDataLabels: true
          }
        }, 
        legend: { show:true, location: 'e' }
	 });
  }

});

