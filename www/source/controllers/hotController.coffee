angular.module 'MusicX'

.controller 'HotController', ['$scope','Music', 'MusicFactory', ($scope, Music, MusicFactory)->
	$scope.view =
		tracks : []
		init : ()->
			Music.getTrakes(50, 'uk').then (res)=>
				MusicFactory.hotTracks = @tracks = res.data


]
