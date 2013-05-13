FbApp.Friends = Backbone.Collection.extend({
  model: FbApp.Friend,  //On associe un model a notre collection
  search: function(searchToken){
    searchToken = searchToken.toLowerCase();

    var sortedArray = this.filter(function(friendModel){
      return _.find(['birthday_date', 'name' /*... etc... */], function(attr){  //On recherche dans notre collection les élements correspondant a la chaine de caractère passé en paramètre
        return (friendModel.get(attr) || '').toLowerCase().indexOf(searchToken) !== -1;
      }) !== undefined;
    }, this);

    this.trigger('reset', sortedArray);  // Ensuite on emet un signal pour que l'appView mette à jour l'application
  },

  sortByName: function(){
    var sortedArray = this.sortBy(function(friend){  //On trie la collection par le nom
      return friend.get('name'); 
    });

    this.trigger('reset', sortedArray);  //On envoie à la vue
  },

  sortByBirthday: function(){  //On trie la collection par anniversaire
    var sortedArray = this.sortBy(function(friend){
      return Date.parse(friend.get('birthday_date'));
    });

    this.trigger('reset', sortedArray);  //On envoie à la vue
  },
});
