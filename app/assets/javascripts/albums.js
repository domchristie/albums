//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require router

window.Albums = {
  init: function() {
    this.router = new Albums.Router();
    this.tracks = new Albums.TracksCollection();
    
    new Albums.SearchView({ model: new Albums.Search() });
    Backbone.history.start();
  }
};