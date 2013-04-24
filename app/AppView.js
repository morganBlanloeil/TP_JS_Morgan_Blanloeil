FbApp.AppView = Backbone.View.extend({
  events:{
    'click #byName':'sortByName',
    'click #byBirthday':'sortByBirthday',
    'keyup #search':'search'
  },

  initialize: function(){
    this.collection.on('reset', this.render, this);
    this.$friendList = this.$el.find('.friend-list');
  },

  search: function(e){
    this.collection.search(e.currentTarget.value);
  },

  sortByName: function(){
    this.collection.sortByName();
  },

  sortByBirthday: function(){
    this.collection.sortByBirthday();
  },

  render: function(collection){
    this.$friendList.empty();
    var arrayForChartBySex = new Array();
    var tabIndexFriendCount = [100,200,300,400,500];
    var arrayForChartByFriendCount = new Array();
    this.initializeTab(arrayForChartByFriendCount,tabIndexFriendCount);
    var $container = $('<div/>');
    collection.forEach(function(friend){
      var view = new FbApp.FriendView({
        model: friend
      });
      $container.append(view.render().$el);
      this.putInArrayForChart(arrayForChartBySex,friend['attributes']['sex']);
      this.putInArrayForChartFriendCount(arrayForChartByFriendCount,friend['attributes']['friend_count']);
    }, this);
    this.$friendList.append($container);

    var chartView = new FbApp.ChartsView();
    chartView.setChartBySex(arrayForChartBySex);
    chartView.setChartByFriendCount(arrayForChartByFriendCount);
  },

  putInArrayForChart: function(tab,type){     
      var tmp =  false;
      tab.forEach(function(tabEnter){
        if(tabEnter[0] == type){
            tabEnter[1]++;
            tmp = true

        }
      });
      if(tmp == false){
           var newTab = new Array(type,0);
           tab.push(newTab);
      }
  },
  putInArrayForChartFriendCount: function(tab,type){
      var tmpMin = 0;
       tab.forEach(function(tabEnter){
          if( (type < tabEnter[0]) && (type >= tmpMin ) ){
            tabEnter[1]++;
          }
          tmpMin = tabEnter[0];
       });

  },

  initializeTab : function(tab,toInsert){
      toInsert.forEach(function(item){
          var tmp = [item,0];
          tab.push(tmp);        
      }); 
  },
});

