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
    this.collection.setSortBy('name');   //Fonction de tri par nom
  },

  sortByBirthday: function(){

    this.collection.setSortBy('birthday');  //Fonction de tri par anniversaire
  },

  render: function(collection){
    this.$friendList.empty(); 
    var $container = $('<div/>');
    collection.forEach(function(friend){  //Pour chaque item de la collection
      var view = new FbApp.FriendView({
        model: friend
      });
      $container.append(view.render().$el);  // On ajoute la vue renvoyé par le model a notre contenair principal
    }, this);
    this.$friendList.append($container);  //On affiche le contenaire
  },
});

