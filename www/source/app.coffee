angular.module 'MusicX', ['ionic']

.run ($ionicPlatform, $state)->
	$ionicPlatform.ready ()->
		if window.cordova && window.cordova.plugins.Keyboard
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar true
			cordova.plugins.Keyboard.disableScroll true
		if window.StatusBar then StatusBar.styleDefault();
		$state.go 'home'



