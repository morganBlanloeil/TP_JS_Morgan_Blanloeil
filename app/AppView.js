FbApp.AppView = Backbone.View.extend({
  events:{
    'click #byName':'sortByName',    //Initialisation des différents Events
    'click #byBirthday':'sortByBirthday',
    'keyup #search':'search'
  },

  initialize: function(){
    this.collection.on('reset', this.render, this);  // On va écouter sur la collection, lorsque celle ci emet, efefctue la fonction reset on apelle la méthode render
    this.$friendList = this.$el.find('.friend-list');
  },

  search: function(e){
    this.collection.search(e.currentTarget.value);   // Méthode qui va chercher les élements en fonctions des paramètres de recherche
  },

  sortByName: function(){
    this.collection.sortByName();   //Fonction de tri par nom
  },

  sortByBirthday: function(){
    this.collection.sortByBirthday();  //Fonction de tri par anniversaire
  },

  render: function(collection){
    this.$friendList.empty();   //On vide la div pour ne pas accumuler les affichages
    var arrayForChartBySex = new Array();  // Tableau pour le graphe
    var tabIndexFriendCount = [100,200,300,400,500];
    var arrayForChartByFriendCount = new Array();
    var arrayForChartByRelationShip = new Array();
    this.initializeTab(arrayForChartByFriendCount,tabIndexFriendCount);
    var $container = $('<div/>');
    collection.forEach(function(friend){  //Pour chaque item de la collection
      var view = new FbApp.FriendView({
        model: friend
      });
      $container.append(view.render().$el);  // On ajoute la vue renvoyé par le model a notre contenair principal
      this.putInArrayForChart(arrayForChartBySex,friend['attributes']['sex']);  //On incrémente nos tableaux pour nos graphiques
      this.putInArrayForChartFriendCount(arrayForChartByFriendCount,friend['attributes']['friend_count']);
      this.putInArrayForChart(arrayForChartByRelationShip,friend['attributes']['relationship_status']);
      
    }, this);
    this.$friendList.append($container);  //On affiche le contenaire

    var chartView = new FbApp.ChartsView();  //On créer une vue pour les graphes
    chartView.setChartBySex(arrayForChartBySex); //On affiche les graphes
    chartView.setChartByFriendCount(arrayForChartByFriendCount);
    chartView.setChartByRelationShip(arrayForChartByRelationShip);
  },

  putInArrayForChart: function(tab,type){     
      var tmp =  false;
      tab.forEach(function(tabEnter){  //On parcours le tableau si la colonne éxiste déja on l'incrémente
        if(tabEnter[0] == type){
            tabEnter[1]++;
            tmp = true

        }
      });
      if(tmp == false){  //Sinon on en créer une nouvelle
           var newTab = new Array(type,1);
           tab.push(newTab);
      }
  },
  putInArrayForChartFriendCount: function(tab,type){
      var tmpMin = 0;
       tab.forEach(function(tabEnter){ 
          if( (type < tabEnter[0]) && (type >= tmpMin ) ){  //On incrémente le nombre d'amis compris dans les intervalles du tableau 
            tabEnter[1]++;
          }
          tmpMin = tabEnter[0];
       });

  },

  initializeTab : function(tab,toInsert){  //On initialise notre tableau pour le nombre d'amis
      toInsert.forEach(function(item){
          var tmp = [item,0];
          tab.push(tmp);        
      }); 
  },
});

