var app = angular.module('artwork', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/state1");

	$stateProvider
		.state('state1', {
			url: "/state1",
			templateUrl: 'partials/landing.html'
		})
		.state('state1.list', {
			url: "/list",
			templateUrl: "partials/state1.list.html",
			controller: function($scope){
				$scope.items = ["A", "list", "of", "items"];
			}
		})
		.state('state2', {
			url: "/state2",
			templateUrl: 'partials/gallery.html'
		});
});