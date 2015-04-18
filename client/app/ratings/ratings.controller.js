'use strict';

angular.module('nytBooksApp')
  .controller('RatingsCtrl', function ($scope, Ratings) {
    $scope.message = 'Hello';

    $scope.ratings = [];
    $scope.users = [];

    $scope.order = "-rating";

    Ratings.get(function(ratings){
    	$scope.ratings = ratings;
    })
  });
