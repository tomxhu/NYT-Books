'use strict';

angular.module('nytBooksApp')
  .factory('Ratings', function Auth($rootScope, $http) {
    
    return {

    	create : function(rating, success, error){
    		   
    		var url = '/api/rating/'
    		
			$http.post(url, rating)
			     .success(function(data, status, headers, config) {

			         success(data)
			     })
			     .error(function(data, status, headers, config) {
			         console.error(status);
	    	     error(status);
			     })
			 },

      categories :  function(success, error){
        
        // Get list of available categories
        $http.get('/api/nyt/categories')
          .success(function(data, status, headers, config) {
              //what do I do here?
              success(data.results);
          })
          .error(function(data, status, headers, config) {
              error(status)
          });
        },
    };
  });
