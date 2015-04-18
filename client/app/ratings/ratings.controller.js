'use strict';

angular.module('nytBooksApp')
  .controller('RatingsCtrl', function ($scope, Ratings) {
    $scope.message = 'Hello';

    $scope.ratings = [];

    Ratings.get(function(ratings){
    	$scope.ratings = ratings;
    })

  });
