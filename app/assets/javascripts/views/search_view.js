Albums.SearchView = Backbone.View.extend({
  el: 'body',

  template: JST['templates/search'],
  
  events: {
    'input': 'input'
  },
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },
  
  input: function(evt) {
    this.model.set('username', evt.target.value);
  }
});