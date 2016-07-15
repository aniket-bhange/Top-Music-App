angular.module 'MusicX'
.controller 'HomeController', ['$scope', 'Music', 'MusicFactory', '$state', ($scope, Music, MusicFactory, $state)->
	$scope.view =
		init : ()->
			tracks : []
			Music.getTrakes(100).then (res)=>
				MusicFactory.homeTracks = @tracks = res.data
		goToLyrics : (id)->
			$state.go 'lyrics', {track_id : id}
]
