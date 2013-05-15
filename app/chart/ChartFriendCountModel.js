FbApp.ChartFriendCountModel = FbApp.ChartModel.extend({
	
	processData : function(collection){
		var tabIndexFriendCount = [100,200,300,400,500];
	    var arrayForChartByFriendCount =  [];
	    tabIndexFriendCount.forEach(function(item){
	      var tmp = [item,0];
          arrayForChartByFriendCount.push(tmp);  
        });   

		collection.forEach(function(friend){
			var type = friend['attributes']['friend_count'];
			var tmpMin = 0;
       		arrayForChartByFriendCount.forEach(function(tabEnter){ 
	          	if( (type < tabEnter[0]) && (type >= tmpMin ) ){  //On incrémente le nombre d'amis compris dans les intervalles du tableau 
	            	tabEnter[1]++;
	          	}
	          	tmpMin = tabEnter[0];
      	 	});
		});

		arrayForChartByFriendCount.forEach(function(tab){
  			tab[0] = "< " + tab[0];
  		});  

		this.arr = arrayForChartByFriendCount
		this.set('charData' ,this);
	},
});