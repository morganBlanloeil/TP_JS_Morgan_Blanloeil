FbApp.ChartRelationshipModel = FbApp.ChartModel.extend({

	/*initialize: function(){
        this.collection.on('reset', this.render, this);    
  	},*/

	processData : function(collection){
		var arrayByRelationChip = []; 
		collection.forEach(function(friend){
			var type = friend['attributes']['relationship_status'];
			 var tmp =  false;
		      arrayByRelationChip.forEach(function(tabEnter){  //On parcours le tableau si la colonne éxiste déja on l'incrémente
		        if(tabEnter[0] == type){
		            tabEnter[1]++;
		            tmp = true

		        }
		      });
		      if(tmp == false){  //Sinon on en créer une nouvelle
		           var newTab = new Array(type,1);
		           arrayByRelationChip.push(newTab);
		      }
		});
		this.arr = arrayByRelationChip;
		this.set('charData' ,this.arr);
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

  

});