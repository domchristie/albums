//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require router

window.Albums = {
  init: function(options) {
    this.router = new Albums.Router();
    this.tracks = new Albums.TracksCollection();
    if(options && options.currentUser) {
      this.currentUser = new Albums.User(options.currentUser);
    }
    
    new Albums.SearchView({ model: new Albums.Search() });
    Backbone.history.start();
  }
};