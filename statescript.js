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

app.controller('galleryCtrl', function($scope, $http){
	document.body.className = "";
	var pics = [];

	var allPics = {}

	//Grab them from a local json
	$http.get('images.json')
	   .then(function(result){
	      $scope.artwork = result.data;       
	      console.log($scope.artwork);         
	    });

//	$scope.artwork = pics;

	//Modal Stuff
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	console.log(span)


	$scope.modalOpen = function(source){
		modal.style.display='block';
		var newImg = document.createElement("img");
		//document.getElementById('modal-text').innerHTML = text;
		document.getElementsByClassName('modal-img')[0].appendChild(newImg);
		newImg.src = source;
	};


	//Delete the newly created image elt so 
	function clearImg(){
	  var delImg = document.getElementsByClassName('modal-img')[0]
		console.log(delImg);
		delImg.removeChild(delImg.firstChild);
	}

	//When you click the x, the modal window closes
	$scope.clickX = function() {
	  modal.style.display='none';
	  clearImg();
	}

	//When you click outside the modal window, it closes
	window.onclick = function(event){
		if(event.target == modal){
			modal.style.display='none'
			console.log("clicked outside")
			clearImg();
		}
	}

});