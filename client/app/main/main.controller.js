'use strict';

angular.module('nytBooksApp')
.controller('MainCtrl', function ($scope, $http, BestSellers) {
    
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

      query.date = query.year + '/' + query.month + '/01';

      BestSellers.get(query, function(resp){
        $scope.books = resp;
      }, function(resp){
        $scope.error = resp;
      })
      
    }

    BestSellers.categories(function(resp){
      $scope.categories = resp;
    },function(resp){
      $scope.error = resp;
    })

    $scope.loadBooks($scope.query);


})
