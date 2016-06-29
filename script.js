var app = angular.module('artwork', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/gallery',
		{
			controller: 'galleryCtrl',
			templateUrl: 'partials/gallery.html'

		})
		// .when('/dog',
		// {
		// 	controller: 'dogCtrl',
		// 	templateUrl: 'partials/dog.html'
		// })
		.otherwise({redirectTo: '/'});
});

app.controller('galleryCtrl', function($scope){
	var pics = {};
	pics.push({"title": "tubbs",
					"src": "http://vignette1.wikia.nocookie.net/nekoatsume/images/a/a2/Album_Tubbs.png/revision/latest?cb=20151111142920"})
	$scope.artwork = pics;
	$scope.print = 'JUST LET HIM EAT';

	$scope.expand = function()){
		console.log("expand!!!");
	};

});
