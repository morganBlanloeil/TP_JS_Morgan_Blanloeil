FbApp.Friends = Backbone.Collection.extend({
  model: FbApp.Friend,
  search: function(searchToken){
    searchToken = searchToken.toLowerCase();

    var sortedArray = this.filter(function(friendModel){
      return _.find(['birthday_date', 'name' /*... etc... */], function(attr){
        return (friendModel.get(attr) || '').toLowerCase().indexOf(searchToken) !== -1;
      }) !== undefined;
    }, this);

    this.trigger('reset', sortedArray);
  },

  sortByName: function(){
    var sortedArray = this.sortBy(function(friend){
      return friend.get('name');
    });

    this.trigger('reset', sortedArray);
  },

  sortByBirthday: function(){
    var sortedArray = this.sortBy(function(friend){
      return Date.parse(friend.get('birthday_date'));
    });

    this.trigger('reset', sortedArray);
  },
});
