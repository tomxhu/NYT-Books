'use strict';

angular.module('nytBooksApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $http.get('/api/nyt/categories')

      .success(function(data, status, headers, config) {
          //what do I do here?
          console.log(data)
      })
      .error(function(data, status, headers, config) {
          console.log(status);
          $scope.error = true;
      });

    // var categoriesAPI = 'http://api.nytimes.com/svc/books/v2/lists/names?api-key=2929e63191572000a0ca99908abab2d3:1:71850106';

    // $http.get(categoriesAPI).
    //   success(function(data, status, headers, config) {
    //       //what do I do here?
    //       console.log(data)
    //   }).
    //   error(function(data, status, headers, config) {
    //       $scope.error = true;
    //   });
  })
