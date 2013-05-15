FbApp.ChartFriendCountModel = FbApp.ChartModel.extend({
	
	processData : function(collection){
		var tabIndexFriendCount = [100,200,300,400,500];  //Les différents intervalles des ages
	    var arrayForChartByFriendCount =  [];
	    tabIndexFriendCount.forEach(function(item){  //On rempli le tableau avec les intervalles
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
		arrayForChartByFriendCount[0][0] = "100";
		arrayForChartByFriendCount[1][0] = "200";
		arrayForChartByFriendCount[2][0] = "300";
		arrayForChartByFriendCount[3][0] = "400";
		arrayForChartByFriendCount[4][0] = "500";
		this.arr = arrayForChartByFriendCount
		this.trigger('charData' ,this);
	},
});