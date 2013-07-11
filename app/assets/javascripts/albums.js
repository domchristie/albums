//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require router

window.Albums = {
  init: function(options) {
    this.router = new Albums.Router();
    Backbone.history.start();
  }
};