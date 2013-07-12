Albums.Router = Backbone.Router.extend({
  routes: {
    '': 'search',
    'users/:username': 'showUser'
  },
  
  search: function() {
    
  },
  
  showUser: function(username) {
    new Albums.ResultsView({ collection: Albums.tracks });
    Albums.tracks.fetch({
      data: { username: username },
      reset: true
    });
  }
});