angular.module 'MusicX'

.controller 'RatingController', ['$scope', 'Music', 'MusicFactory', ($scope, Music, MusicFactory)->
	$scope.view =
		tracks : []
		init : ()->
			Music.getTrakes(100, null, true).then (res)=>
				MusicFactory.ratingTracks = @tracks = res.data

]
