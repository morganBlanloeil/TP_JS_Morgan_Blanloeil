FbApp.ChartSexModel = FbApp.ChartModel.extend({

 	processData : function(collection){
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
		this.arr = arrayForChartBySex
		this.set('charData' ,this);
	},
});