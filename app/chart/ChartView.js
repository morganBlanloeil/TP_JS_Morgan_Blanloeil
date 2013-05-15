FbApp.ChartView = Backbone.View.extend({
	events:{

  },

  initialize: function(){
        this.collection.on('reset', this.render, this); 
        console.log(this.model);
        
  },

  render: function(collection){
      this.model.forEach(function(mod){
          mod.setCollection(collection);
      });
  },

  setChartBySex: function(arrayForChartBySex){   //On va afficher le graphique en fonction du Json passé en paramètre
	 var plot1 = jQuery.jqplot ('chartBySex', [arrayForChartBySex], { 
        seriesDefaults: {
          title:'Pourcentage par sexe',  //Le titre du graphe
          renderer: jQuery.jqplot.PieRenderer,  //Le type de graphe
          rendererOptions: {
            showDataLabels: true
          }
        }, 
        legend: { show:true, location: 'e' }
	 });
  },

  setChartByFriendCount: function(arrayByFriendCount){
  		this.resetTitleTabFriendCount(arrayByFriendCount);
  		var plot2 = jQuery.jqplot ('chartByFriendCount', [arrayByFriendCount], { 
        seriesDefaults: {
          renderer: jQuery.jqplot.PieRenderer, 
          rendererOptions: {
            showDataLabels: true
          }
        }, 
        legend: { show:true, location: 'e' }
	 });
  },

  setChartByRelationShip : function(arrayByRelationChip){
      var plot3 = jQuery.jqplot ('chartByRelationShip', [arrayByRelationChip], { 
        seriesDefaults: {
          renderer: jQuery.jqplot.PieRenderer, 
          rendererOptions: {
            showDataLabels: true
          }
        }, 
        legend: { show:true, location: 'e' }
   });
  },

  resetTitleTabFriendCount : function(arrayByFriendCount){
  		arrayByFriendCount.forEach(function(tab){
  			tab[0] = "< " + tab[0];
  		});
  },

 
});

