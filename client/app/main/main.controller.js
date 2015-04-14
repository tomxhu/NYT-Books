'use strict';

angular.module('nytBooksApp')
.controller('MainCtrl', function ($scope, $http, BestSellers) {

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


    $scope.loadBooks = function(query){

      query['date'] = query.year + '-01-' + query.month;

      console.log(query);

      BestSellers.get(query, function(resp){
        $scope.books = resp;
        $scope.loading = false;
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
