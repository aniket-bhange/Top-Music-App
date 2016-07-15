angular.module 'MusicX'

.controller 'LyricsController', ['$scope', 'MusicFactory', '$stateParams', 'Music', '$sce', ($scope, MusicFactory, $stateParams, Music, $sce)->
	$scope.view =
		track_id : $stateParams.track_id
		track : null
		lyric : null
		title : null
		init : ()->
			@track = MusicFactory.getTrackById @track_id, MusicFactory.homeTracks
			@title = @track.album_name
			Music.getLyrics(@track.track_id).then (res)=>
				@lyric = res.data
				@lyric.lyrics_body = $sce.trustAsHtml @lyric.lyrics_body
				console.log @lyric
			console.log @track


]
