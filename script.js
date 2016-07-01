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
	var pics = [];

	var allPics = {}

	for (var i = 0; i < 5; ++i){
	pics.push({"title": "elephant",
			"src": "http://pre06.deviantart.net/2fc0/th/pre/i/2015/187/f/0/rescue_by_lilisys-d908s3o.png"});
		pics.push({"title": "umbrella",
			"src": "http://img11.deviantart.net/3813/i/2013/020/7/9/umbrella_by_lilisys-d5s6z97.jpg"});
	}

	$scope.artwork = pics;
	$scope.print = 'JUST LET HIM EAT';

	$scope.expand = function(){
		console.log("expand!!!");
	};

});
