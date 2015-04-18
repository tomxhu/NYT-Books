'use strict';

angular.module('nytBooksApp')
  .factory('Ratings', function Auth($rootScope, $http) {
    
    return {

    	create : function(rating, success, error){
    		   
    		var url = '/api/ratings/'
      		
  			$http.post(url, rating)
  			     .success(function(data, status, headers, config) {
  			         success(data)
  			     })
  			     .error(function(data, status, headers, config) {
  			         console.error(status);
  	    	       error(status);
  			     })
			 },
      get : function(success, error){
           
        var url = '/api/ratings/'
          
        $http.get(url)
             .success(function(data, status, headers, config) {
                 success(data)
             })
             .error(function(data, status, headers, config) {
                 console.error(status);
                 error(status);
             })
       },
    };
  });
