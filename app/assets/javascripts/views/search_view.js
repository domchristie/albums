Albums.SearchView = Backbone.View.extend({
  el: 'body',

  template: JST['templates/search'],
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});