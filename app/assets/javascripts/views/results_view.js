Albums.ResultsView = Backbone.View.extend({
  template: JST['templates/results'],
  tagName: 'ul',
  className: 'albums',
  
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
  },
  
  render: function() {
    this.$el.html(this.template({ collection: this.collection }));
    $('.results').html(this.el);
    return this;
  }
});