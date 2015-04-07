angular.module('MainCtrl', []).controller('MainController', function($scope, $http, Madlibs) {
	// insert a new tagline to edit content on the site!
	$scope.tagline = 'The place for cool madlibs !';
	
	// begin madlib exercise
		// description parts
	$scope.description_one = 'There once was a';
	$scope.description_two = 'who left town to find';
	$scope.description_three = 'and afterwards';
	$scope.description_four = 'towards the river.';
		// user input model
	$scope.userinputs = {};
	$scope.datastorage = [];
	
	$scope.info = {Animals : [ "dog", "cat", "bat", "bird" ]};
	
		// pseudo datastore
	Madlibs.get()
		.success(function(data){
			$scope.datastorage = data;
		});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createMadlib = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.userinputs != undefined) {
				console.log($scope.userinputs);
				// call the create function from our service (returns a promise object)
				Madlibs.create($scope.userinputs)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.userinputs = {}; // clear the form so our user is ready to enter another
						$scope.datastorage = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteMadlib = function(id) {
			Madlibs.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.datastorage = data; // assign our new list of todos
				});
		};	
	
	$scope.empty = {};
	
	$scope.reset = function() {
		$scope.userinputs = angular.copy($scope.empty);
	};
	
	/*$scope.fetch = function() {
		$scope.userinputs = angular.copy($scope.datastorage);
	};*/
	
	$scope.reset();

});