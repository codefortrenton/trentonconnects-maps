angular.module('MainCtrl', []).controller('MainController', function($scope) {
	// insert a new tagline to edit content on the site!
	$scope.tagline = 'The place for cool madlibs!';
	
	// begin madlib exercise
		// description parts
	$scope.description_one = 'There once was a';
	$scope.description_two = 'who left town to find';
	$scope.description_three = 'and afterwards';
	$scope.description_four = 'towards the river.';
		// user input model
	$scope.userinputs = {};
	
		// pseudo datastore
	$scope.datastorage = {};
	$scope.empty = {};

	$scope.update = function(userinputs) {
		$scope.datastorage = angular.copy(userinputs);
	};
	
	$scope.reset = function() {
		$scope.userinputs = angular.copy($scope.empty);
	};
	
	$scope.fetch = function() {
		$scope.userinputs = angular.copy($scope.datastorage);
	};
	
	//$scope.reset();

});