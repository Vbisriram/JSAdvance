//(function() {
var app = angular.module('bookmark');

app.controller('bookmark_controller', function($scope) {
	///Post in the scope
	// $scope.post = {
	// 	title: 'Hello World',
	// 	content: 'Samp;le',
	// 	date: new Date()
	// };
	// $timeout(function(){
	// 	$scope.post.title = "Test";
	// }, 2000);

	//
	// $scope.addPost = function(){
	//   console.log($scope.new_post);
	//   $scope.posts.push($scope.new_post);
	//   $scope.new_post = {};
	// };

	$scope.sample = "world";
	$scope.categories = [{
		"id": 1,
		"name": "Education"
	}, {
		"id": 2,
		"name": "Sports"
	}, {
		"id": 3,
		"name": "World"
	}, {
		"id": 4,
		"name": "Politics"
	}, {
		"id": 5,
		"name": "News"
	}];
	$scope.bookmarks = [{
		"id": 1,
		"title": "JavaScript Basics",
		"url": "https://egghead.io/lessons/angularjs-building-an-angular-app-controllers",
		"category": "Education"
	}, {
		"id": 2,
		"title": "Eggly videos for Angular JS",
		"url": "https://egghead.io/lessons/angularjs-building-an-angular-app-controllers",
		"category": "Education"
	}, {
		"id": 3,
		"title": "ESPN Cricinfo",
		"url": "http://www.espncricinfo.com",
		"category": "Sports"
	}];

	$scope.currentCategory = null;

	$scope.setCurrent = function() {
		console.log("reach");
		$scope.currentCategory = null;
	};



	var setCurrentCategory = function(category) {
		$scope.currentCategory = category;
	};

	$scope.setCurrentCategory = setCurrentCategory;


});

//})();
