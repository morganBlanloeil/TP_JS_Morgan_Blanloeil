FbApp.ChartSexModel = FbApp.ChartModel.extend({

 	setCollection : function(collection){
		var arrayForChartBySex = []; 
		collection.forEach(function(friend){
			var type = friend['attributes']['sex'];
			 var tmp =  false;
		      arrayForChartBySex.forEach(function(tabEnter){  //On parcours le tableau si la colonne éxiste déja on l'incrémente
		        if(tabEnter[0] == type){
		            tabEnter[1]++;
		            tmp = true

		        }
		      });
		      if(tmp == false){  //Sinon on en créer une nouvelle
		           var newTab = new Array(type,1);
		           arrayForChartBySex.push(newTab);
		      }
		});
		this.setChartBySex(arrayForChartBySex);
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



  	

});