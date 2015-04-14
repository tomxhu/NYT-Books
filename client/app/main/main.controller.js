'use strict';

angular.module('nytBooksApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    // Settings for API
    $scope.query = {
      category : null,
      date: null,
    }

    $scope.awesomeThings = [];

    // Available Categories
    $scope.categories = [];

    // List of Best Sellers
    $scope.books = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };

    // Get list of available categories
    $http.get('/api/nyt/categories')
      .success(function(data, status, headers, config) {
          //what do I do here?
          $scope.categories = data.results;
      })
      .error(function(data, status, headers, config) {
          console.log(status);
          $scope.error = status;
      });

    // Get list of books
    $http.get('/api/nyt/')
      .success(function(data, status, headers, config) {

        $scope.books = [];
          
          // Format data
          angular.forEach(data.results, function(book){

              // If our book as details
              if (book.book_details && book.book_details[0]){
                
                // Extract details
                var details = book.book_details[0];

                // Flatten object (move nesting to root)
                $.extend(true, book, details);

                // Add to available array
                $scope.books.push(book);
              }

          });

          console.log($scope.books);
      })
      .error(function(data, status, headers, config) {
          console.log(status);
          $scope.error = status;
      });

  })
