Albums.Track = Backbone.Model.extend({
  initialize: function() {
    var imageUrl = _.find(this.get('image'), function(image) {
      return image.size === 'extralarge';
    })['#text'];
    this.set('imageUrl', imageUrl);
  }
});

Albums.TracksCollection = Backbone.Collection.extend({
  url: '/tracks',

  model: Albums.Track,

  parse: function(response) {
    return response.recenttracks.track;
  },
  
  albums: function() {
    return this.groupBy(function(track) {
      return track.get('album')['#text'];
    });
  }
});