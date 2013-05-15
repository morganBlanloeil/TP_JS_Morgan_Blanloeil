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
    console.log(tab.arr);
    $(this.el).highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: this.title,
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage}%</b>',
              percentageDecimals: 0,
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
                            return '<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage) +' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                data : tab.arr,
            }]
        });
    	/*var plot2 = jQuery.jqplot (this.nameDiv, [tab.arr], { 
        seriesDefaults: {
          renderer: jQuery.jqplot.PieRenderer, 
          rendererOptions: {
            showDataLabels: true
          }
        }, 
        legend: { show:true, location: 'e' }
	 });*/
  
  },
});

