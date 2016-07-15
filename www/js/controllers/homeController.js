angular.module('MusicX').controller('HomeController', [
  '$scope', 'Music', 'MusicFactory', '$state', function($scope, Music, MusicFactory, $state) {
    return $scope.view = {
      init: function() {
        ({
          tracks: []
        });
        return Music.getTrakes(100).then((function(_this) {
          return function(res) {
            return MusicFactory.homeTracks = _this.tracks = res.data;
          };
        })(this));
      },
      goToLyrics: function(id) {
        return $state.go('lyrics', {
          track_id: id
        });
      }
    };
  }
]);
