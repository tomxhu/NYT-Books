'use strict';

angular.module('nytBooksApp')
  .controller('ProfileCtrl', function ($scope, $http, $stateParams, Ratings) {
    
    $scope.error = null;

    var id = $stateParams.id;

    $http.get('/api/users/' + id)
    	.success(function(user){
    		$scope.user = user;
    	})
    	.error(function(resp){
    		$scope.error = "Error loading user";
    	})


    $scope.loadRatings = function(){

        var query = { user : id };

        Ratings.search(query,function(ratings){
          $scope.ratings = ratings;
        })
    }

    $scope.loadRatings();

  });