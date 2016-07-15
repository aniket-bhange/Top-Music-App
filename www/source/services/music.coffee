angular.module 'MusicX'

.service 'Music', ['$http', ($http)->
	Music =
		page : 1
		# page_size : null
		getTrakes : (size, country, rating)->
			f_country = if country then country else 'US'
			options =
				page : @page
				page_size : size
				apikey : apikey
				f_has_lyrics : 1
				country : f_country
			if rating then options.s_track_rating = 'DESC'
			$http.get "#{apiUrl}/chart.tracks.get",
				transformResponse : (response)->
					response = JSON.parse(response)
					_.pluck response.message.body.track_list, 'track'
					# angular.forEach message.body.track_list, (value)->
				params : options
		getLyrics : (track_id)->
			options =
				apikey : apikey
				track_id : track_id
			$http.get "#{apiUrl}/track.lyrics.get",
				params : options
				transformResponse : (response)->
					response = JSON.parse(response)
					response.message.body.lyrics.lyrics_body = response.message.body.lyrics.lyrics_body.replace(/(?:\r\n|\r|\n)/g, '<br />')
					response.message.body.lyrics

]

.factory 'MusicFactory', [()->
	MusicFactory =
		ratingTracks : []
		hotTracks : []
		homeTracks : []
		getTrackById : (id, tracks)->
			_.find tracks, (value)-> value.track_id == parseInt(id)
]

