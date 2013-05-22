FbApp.Friends = Backbone.Collection.extend({
  model: FbApp.Friend,

  initialize: function(){
    this.sortField ='name';  //Par défault la collection se trie par nom
    this.filteredColl = this;  
    this.filteredCollObject = this
    this.searchToken ="";
  },

  search: function(searchToken){
    this.searchToken = searchToken; //On récupère la contenu de la recherche
    searchToken = searchToken.toLowerCase();
    var friends = this._flatten(this.toJSON());
    this.filteredColl = _(this.filter(function(friend){
      return _.find(_.keys(friend.attributes), function(attr){
        if(!_.isString(friend.attributes[attr])){return false;}
        return (friend.attributes[attr] ||'').toLowerCase().indexOf(searchToken) !== -1;
      }) !== undefined;
    }, this));
    this.filteredCollObject = this.filteredColl;  //On récupère l'objet
    this.getSortedCollection();
    this.trigger('reset', this.filteredColl); //On indique que la collection a changé
  },

   _flatten: _.memoize(function(root){
    var defaultValue = '';

    function valueSelector(value){
      return _.isString(value) && value.length > 0;
    }

    return root.map(function(friend){
      return _.flatten(friend, valueSelector, defaultValue);
    }, this);

  }),

  setSortBy: function(field){
    this.sortField = field;
    this.getSortedCollection();
    this.trigger('reset', this.filteredColl);
  },

  sortCollection:function(){
      this.getSortedCollection();
      this.trigger('reset', this.filteredColl);
  },

  _visitor:{
    name:function(friendModel){return friendModel.get('name');},  //Si on trie par nom  on renvoie le nom de l'ami
    birthday:function(friendModel){  //Si c'est par date
      var reg= new RegExp("^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$","g");   //L'expression régulière permettant de vérifier la date
      var tmpDate = friendModel.get('birthday_date');  //On récupère la date de l'ami
      if(! reg.test(tmpDate)){ //Si elle ne correspond pas à l'expression régulière on donne une valeur par défault
        tmpDate = "01/01/3000";
      }
      var date =(tmpDate).split("/");
      return [date[2],date[1],date[0]];  //On retourne la date dans le format AAAA/MM/JJ
    },
  },
  
  getSortedCollection: function(){

    this.filteredColl =  this.filteredCollObject.sortBy(this._visitor[this.sortField]);  //On trie la collection en cours
 
  },
 });
