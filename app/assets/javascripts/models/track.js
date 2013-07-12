Albums.Track = Backbone.Model.extend();

Albums.TracksCollection = Backbone.Collection.extend({
  url: '/tracks',

  model: Albums.Track,

  parse: function(response) {
    return response.recenttracks.track;
  }
});