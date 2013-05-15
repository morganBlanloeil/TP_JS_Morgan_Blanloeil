FbApp.FriendView = Backbone.View.extend({
  className:"friend-item span4",  
  tmpl:_.template($('#friendTmpl').html()),  //On récupère le template correspondant

  initialize: function(){
  },

  /*
	Méthode qui va afficher les infos du JSON dans le template passé en paramètre
  */
  render: function(){
    this.$el.html(this.tmpl(this.model.toJSON()));  // On va chercher dans le fichier HTML le template qu'on veut pour chaque item de la collection
    return this;
  }
});

