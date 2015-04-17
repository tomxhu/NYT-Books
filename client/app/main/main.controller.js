'use strict';

angular.module('nytBooksApp')
.controller('MainCtrl', function ($scope, $http, $timeout, BestSellers, Ratings, Auth) {

    $scope.error = null,
    $scope.loading = true;
    $scope.rating = 0;
    
    // Settings for API (Default)
    $scope.query = {
      category : "hardcover-fiction",
      year: "2015",
      month: "01",
    }

    // Available Categories
    $scope.categories = [];

    // List of Best Sellers
    $scope.books = [];

    $scope.isLoggedIn = Auth.isLoggedIn();

    $scope.favorites = $scope.isLoggedIn ? Auth.getFavorites() : []
    console.log($scope.isLoggedIn);
    console.log($scope.favorites);

    $scope.selected = -1;

    // Select a specific book
    $scope.select = function(index){

      $scope.rating = 0;

      $scope.selected = index;

      $scope.selectedBook = $scope.books[index]
      console.log($scope.selectedBook);
      
      $('#myModal').modal({show : true});
    }

    // Load books
    $scope.loadBooks = function(query){

      $scope.error = null;

      $scope.loading = true;

      query['date'] = query.year + '-' + query.month + '-01';

      BestSellers.get(query, function(resp){
        $scope.books = resp;

        $timeout(function(){
          $scope.loading = false;  
        }, 200);

        if ($scope.books.length < 1){
          $scope.error = "No Result Found."
        }

        
      }, function(resp){
        $scope.error = resp;
        $scope.loading = false;
      })
      
    }

    // Give a rating to a book
    $scope.rate = function(rating){

      $scope.rating = rating;
      
      console.log(rating);

      Ratings.create({
        rating : rating,
        isbn13 : $scope.selectedBook.primary_isbn13
      }, function(){}, function(){})
      
    }

    BestSellers.categories(function(resp){
      $scope.categories = resp;
    },function(resp){
      $scope.error = resp;
    })

    $scope.loadBooks($scope.query);

})