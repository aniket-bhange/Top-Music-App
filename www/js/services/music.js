angular.module('MusicX').service('Music', [
  '$http', function($http) {
    var Music;
    return Music = {
      page: 1,
      getTrakes: function(size, country, rating) {
        var f_country, options;
        f_country = country ? country : 'US';
        options = {
          page: this.page,
          page_size: size,
          apikey: apikey,
          f_has_lyrics: 1,
          country: f_country
        };
        if (rating) {
          options.s_track_rating = 'DESC';
        }
        return $http.get(apiUrl + "/chart.tracks.get", {
          transformResponse: function(response) {
            response = JSON.parse(response);
            return _.pluck(response.message.body.track_list, 'track');
          },
          params: options
        });
      },
      getLyrics: function(track_id) {
        var options;
        options = {
          apikey: apikey,
          track_id: track_id
        };
        return $http.get(apiUrl + "/track.lyrics.get", {
          params: options,
          transformResponse: function(response) {
            response = JSON.parse(response);
            response.message.body.lyrics.lyrics_body = response.message.body.lyrics.lyrics_body.replace(/(?:\r\n|\r|\n)/g, '<br />');
            return response.message.body.lyrics;
          }
        });
      }
    };
  }
]).factory('MusicFactory', [
  function() {
    var MusicFactory;
    return MusicFactory = {
      ratingTracks: [],
      hotTracks: [],
      homeTracks: [],
      getTrackById: function(id, tracks) {
        return _.find(tracks, function(value) {
          return value.track_id === parseInt(id);
        });
      }
    };
  }
]);
