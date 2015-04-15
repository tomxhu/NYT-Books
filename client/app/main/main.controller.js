'use strict';

angular.module('nytBooksApp')
.controller('MainCtrl', function ($scope, $http, $timeout, BestSellers) {

    $scope.error = null,
    $scope.loading = true;
    
    // Settings for API
    $scope.query = {
      category : "hardcover-fiction",
      year: "2015",
      month: "01",
    }

    // Available Categories
    $scope.categories = [];

    // List of Best Sellers
    $scope.books = [];

    $scope.selected = -1;

    // Select a specific book
    $scope.select = function(index){
      $scope.selected = index;

      $('.modal').modal({show : true});
    }


    $scope.loadBooks = function(query){

      $scope.error = null;

      $scope.loading = true;

      query['date'] = query.year + '-01-' + query.month;

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

    BestSellers.categories(function(resp){
      $scope.categories = resp;
    },function(resp){
      $scope.error = resp;
    })

    $scope.loadBooks($scope.query);


})
