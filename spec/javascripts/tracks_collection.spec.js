//= require application
//= require helpers/lastfm_recent_track_json

describe('TracksCollection', function() {

  describe('#parse', function() {
    it('should parse the last.fm recent track JSON', function() {
      var tracksCollection = new Albums.TracksCollection(),
          parsed = tracksCollection.parse(lastfmRecentTrackJSON);
      expect(parsed.length).toEqual(10);
      expect(parsed[0].name).toEqual("Single Stripe (Original Mix)");
    });
  });
  
  describe('#albums', function() {
    it('should group the tracks into albums', function() {
      var tracksCollection = new Albums.TracksCollection(lastfmRecentTrackJSON, { parse: true }),
          albums = tracksCollection.albums();
      expect(albums["Fourth: The Golden Eagle"]).toBeTruthy();
      expect(albums["Welcome To Mali"]).toBeTruthy();
    })
  })
});