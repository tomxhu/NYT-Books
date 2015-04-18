'use strict';

//  Profile Controller
angular.module('nytBooksApp')
  .controller('ProfileCtrl', function ($scope, $http, $stateParams, Ratings) {
    
    $scope.error = null;

    var id = $stateParams.id;

    // Load user information
    $http.get('/api/users/' + id)
    	.success(function(user){
    		$scope.user = user;
    	})
    	.error(function(resp){
    		$scope.error = "Error loading user";
    	})

    // Load user ratings
    $scope.loadRatings = function(){

        var query = { user : id };

        Ratings.search(query,function(ratings){
          $scope.ratings = ratings;
        })
    }

    $scope.loadRatings();

    // ability to delete a rating 
    $scope.deleteRating = function(id){
      Ratings.delete(id, function(){
        $scope.loadRatings();
      }, function(){
      })
    };

  });