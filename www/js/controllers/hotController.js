angular.module('MusicX').controller('HotController', [
  '$scope', 'Music', 'MusicFactory', function($scope, Music, MusicFactory) {
    return $scope.view = {
      tracks: [],
      init: function() {
        return Music.getTrakes(50, 'uk').then((function(_this) {
          return function(res) {
            return MusicFactory.hotTracks = _this.tracks = res.data;
          };
        })(this));
      }
    };
  }
]);
