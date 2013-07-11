Albums.Track = Backbone.Model.extend();

Albums.TracksCollection = Backbone.Collection.extend({
  url: '/tracks'
});