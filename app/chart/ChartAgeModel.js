FbApp.ChartAgeModel = FbApp.ChartModel.extend({
	
	processData : function(collection){
		var arrayForAge = [];
		var reg= new RegExp("^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$","g");  //Expresion régulière au format DD/MM/YYYY
		var nbInconnu = 0;  //Compteur correspondant au date null
		var d = new Date();
		var currentYear = d.getYear() + 1900;  //On récupère l'année d'aujourd'hui

		collection.forEach(function(friend){
			var type = friend['attributes']['birthday_date'];
			var tmp =  false;
			if(reg.test(type)){   //On vérifie si le format reçu est bien une date
			  tabDate = type.split('/');
			  var annee = currentYear - tabDate[2]; //On récupère l'année de naissance de l'ami
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
		    	nbInconnu ++; //Si on respecte pas le format on incrément le null
		    }
		});

		arrayForAge.forEach(function(tab){   //On formate les titres
  			tab[0] += " ans";
  		}); 

        arrayForAge.push(['Inconnu',nbInconnu]);  // On ajoute le nombre de null aux datas
		this.arr = arrayForAge
		this.set('charData' ,this); //On signale qu'on a changé les données
	
});