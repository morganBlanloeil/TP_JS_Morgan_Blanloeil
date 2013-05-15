FbApp.ChartView = Backbone.View.extend({
  /*
    On récupère les options
    on va écouter sur le 'set ' si il est déclenché on lance la méthode render
  */

  initialize: function(options){
      _.extend(this,options || {});
       this.model.on('charData' , this.render , this);
  },

  /**
    Méthode identique pour tous les graphiques, on envoie les données et la div correspondante
    jqPlot se charge de l'affichage
  */
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

