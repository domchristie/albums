//= require application
//= require helpers/lastfm_recent_track_json

describe('Track', function() {
  
  describe('#imageUrl', function() {
    it('should set the imageUrl attribute to the large image url', function() {
      var track = new Albums.Track(lastfmRecentTrackJSON.recenttracks.track[0]);
      expect(track.get('imageUrl')).toEqual('http://userserve-ak.last.fm/serve/300x300/89661183.jpg')
    });
  });
});