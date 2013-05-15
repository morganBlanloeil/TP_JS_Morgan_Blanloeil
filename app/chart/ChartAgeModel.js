FbApp.ChartAgeModel = FbApp.ChartModel.extend({
	
	processData : function(collection){
		var arrayForAge = [];
		var reg= new RegExp("^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$","g");
		var nbInconnu = 0;
		var d = new Date();
		var currentYear = d.getYear() + 1900;

		collection.forEach(function(friend){
			var type = friend['attributes']['birthday_date'];
			var tmp =  false;
			if(reg.test(type)){
			  tabDate = type.split('/');
			  var annee = currentYear - tabDate[2];
		      arrayForAge.forEach(function(tabEnter){  //On parcours le tableau si la colonne éxiste déja on l'incrémente
		        if(tabEnter[0] == annee){
		            tabEnter[1]++;
		            tmp = true

		        }
		      });
		      if(tmp == false){  //Sinon on en créer une nouvelle
		           var newTab = new Array(annee,1);
		           arrayForAge.push(newTab);
		      }
		    }
		    else{
		    	nbInconnu ++;
		    }
		});

		arrayForAge.forEach(function(tab){
  			tab[0] += " ans";
  		}); 

        arrayForAge.push(['Inconnu',nbInconnu]);   
		this.arr = arrayForAge
		this.set('charData' ,this);
	},
});