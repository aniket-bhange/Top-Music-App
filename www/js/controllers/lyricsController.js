angular.module('MusicX').controller('LyricsController', [
  '$scope', 'MusicFactory', '$stateParams', 'Music', '$sce', function($scope, MusicFactory, $stateParams, Music, $sce) {
    return $scope.view = {
      track_id: $stateParams.track_id,
      track: null,
      lyric: null,
      title: null,
      init: function() {
        this.track = MusicFactory.getTrackById(this.track_id, MusicFactory.homeTracks);
        this.title = this.track.album_name;
        Music.getLyrics(this.track.track_id).then((function(_this) {
          return function(res) {
            _this.lyric = res.data;
            _this.lyric.lyrics_body = $sce.trustAsHtml(_this.lyric.lyrics_body);
            return console.log(_this.lyric);
          };
        })(this));
        return console.log(this.track);
      }
    };
  }
]);
