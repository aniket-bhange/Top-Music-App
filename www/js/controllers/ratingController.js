angular.module('MusicX').controller('RatingController', [
  '$scope', 'Music', 'MusicFactory', function($scope, Music, MusicFactory) {
    return $scope.view = {
      tracks: [],
      init: function() {
        return Music.getTrakes(100, null, true).then((function(_this) {
          return function(res) {
            return MusicFactory.ratingTracks = _this.tracks = res.data;
          };
        })(this));
      }
    };
  }
]);
