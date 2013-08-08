Albums.Track = Backbone.Model.extend({
  initialize: function() {
    var artistName = this.get('artist')['#text'];
    this.set('artistName', artistName);
    
    var imageUrl = _.find(this.get('image'), function(image) {
      return image.size === 'extralarge';
    })['#text'];
    this.set('imageUrl', imageUrl ||
      "http://www.gravatar.com/avatar/" + hex_md5(this.get('album')['#text']) + "?f=y&d=identicon&s=300");
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
      return track.get('album')['#text'].toLowerCase();
    });
  }
});