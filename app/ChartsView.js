FbApp.ChartsView = Backbone.View.extend({
  className:" charts",

  initialize: function(){
  },

  setChartBySex: function(arrayForChartBySex){
	 var plot1 = jQuery.jqplot ('chartBySex', [arrayForChartBySex], { 
        seriesDefaults: {
          title:'Pourcentage par sexe',
          renderer: jQuery.jqplot.PieRenderer, 
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

  resetTitleTabFriendCount : function(arrayByFriendCount){
  		arrayByFriendCount.forEach(function(tab){
  			tab[0] = "< " + tab[0];
  		});
  },
});

