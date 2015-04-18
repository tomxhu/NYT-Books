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

       search : function(query, success, error){
           
        var url = '/api/ratings/search'

        if (query.isbn13) {
          url += '?isbn13=' + query.isbn13
        }

        if (query.userId) {
          url += '?userId=' + query.userId
        }
          
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
