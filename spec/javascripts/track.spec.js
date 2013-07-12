//= require application
//= require helpers/lastfm_recent_track_json

describe('Track', function() {
  
  beforeEach(function() {
    this.track = new Albums.Track(lastfmRecentTrackJSON.recenttracks.track[0]);
  });
  
  describe('#imageUrl', function() {
    it('should set the imageUrl attribute to the large image url', function() {
      expect(this.track.get('imageUrl')).toEqual('http://userserve-ak.last.fm/serve/300x300/89661183.jpg');
    });
  });
  
  describe('#artistName', function() {
    it('should set the artistName attribute', function() {
      expect(this.track.get('artistName')).toEqual('Kelpe');
    });
  });
});