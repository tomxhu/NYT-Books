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

    $http.get('/api/nyt/categories')
      .success(function(data, status, headers, config) {
          //what do I do here?
          console.log(data.results)
          $scope.categories = data.results;
      })
      .error(function(data, status, headers, config) {
          console.log(status);
          $scope.error = true;
      });

    $http.get('/api/nyt/')
      .success(function(data, status, headers, config) {
          //what do I do here?
          console.log(data.results)
          $scope.books = data.results;
      })
      .error(function(data, status, headers, config) {
          console.log(status);
          $scope.error = true;
      });

  })
