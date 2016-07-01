var app = angular.module('artwork', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	
	$urlRouterProvider.otherwise("/landing");

	$stateProvider
		.state('landing', {
			url: "/landing",
			templateUrl: 'partials/landing.html',
			controller: 'landingCtrl'
		})
		// .state('state1.list', {
		// 	url: "/list",
		// 	templateUrl: "partials/state1.list.html",
		// 	controller: function($scope){
		// 		$scope.items = ["A", "list", "of", "items"];
		// 	}
		// })
		.state('gallery', {
			url: "/gallery",
			templateUrl: 'partials/gallery.html',
			controller: 'galleryCtrl'
		});
});

app.controller('landingCtrl', function($scope){
	document.body.className = "landing";
});

app.controller('galleryCtrl', function($scope){
	document.body.className = "";
});