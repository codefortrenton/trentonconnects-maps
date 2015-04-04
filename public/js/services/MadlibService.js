angular.module('MadlibService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Madlibs', function($http) {
		return {
			get : function() {
				return $http.get('/api/madlib');
			},
			create : function(userinputs) {
				return $http.post('/api/madlib', userinputs);
			},
			delete : function(id) {
				return $http.delete('/api/madlib/' + id);
			}
		}
	});