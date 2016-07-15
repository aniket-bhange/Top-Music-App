angular.module('MusicX').config([
  '$stateProvider', function($stateProvider) {
    return $stateProvider.state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'views/tab.html'
    }).state('home', {
      url: '/home',
      parent: 'tab',
      views: {
        'home-tab': {
          templateUrl: 'views/home.html',
          controller: 'HomeController'
        }
      }
    }).state('hot', {
      url: '/hot-100',
      parent: 'tab',
      views: {
        'hot-tab': {
          templateUrl: 'views/hot.html',
          controller: 'HotController'
        }
      }
    }).state('rating', {
      url: '/top-rating',
      parent: 'tab',
      views: {
        'rating-tab': {
          templateUrl: 'views/rating.html',
          controller: 'RatingController'
        }
      }
    }).state('lyrics', {
      url: '/lyrics/:track_id',
      cache: false,
      parent: 'tab',
      views: {
        'home-tab': {
          templateUrl: 'views/lyrics.html',
          controller: 'LyricsController'
        }
      }
    });
  }
]);
