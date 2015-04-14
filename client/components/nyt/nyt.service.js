'use strict';

angular.module('nytBooksApp')
  .factory('BestSellers', function Auth($rootScope, $http) {
    
    return {

    	get : function(query, success, error){
    		   
    		   var url = '/api/nyt/'
    		   url += '?date=' + query.date;
    		   url += '&category=' + query.category,
			
			   $http.get(url)
		        .success(function(data, status, headers, config) {

		          var books = [];
		            
		            // Format data
		            angular.forEach(data.results, function(book){

		                // If our book as details
		                if (book.book_details && book.book_details[0]){
		                  
		                  // Extract details
		                  var details = book.book_details[0];

		                  // Flatten object (move nesting to root)
		                  $.extend(true, book, details);

		                  // Add to available array
		                  books.push(book);
		                }

		            });

		            success(books)
		        })
		        .error(function(data, status, headers, config) {
		            console.error(status);
                error(status);
		        });
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
