angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	// learn routes!
	$routeProvider

		/*
		.when('/', {
			templateUrl: 'views/subviews/home.html',
			controller: 'MainController'
		})
		*/
		
		// home page
		.when('/home', {
			templateUrl: 'views/subviews/home.html',
			controller: 'MainController'
		})
		// nerd page
		.when('/nerds', {
			templateUrl: 'views/subviews/nerd.html',
			controller: 'NerdController'
		})
		// geek page
		.when('/geeks', {
			templateUrl: 'views/subviews/geek.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);
