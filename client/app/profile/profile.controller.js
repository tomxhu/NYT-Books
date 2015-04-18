'use strict';

//  Profile Controller
angular.module('nytBooksApp')
  .controller('ProfileCtrl', function ($scope, $http, $stateParams, Ratings, Auth) {
  
    $scope.error = null;
    $scope.id = $stateParams.id;

    $scope.following = false;

    $scope.currentUser = Auth.getCurrentUser();

    // Used to display/not display features 
    $scope.isLoggedIn = Auth.isLoggedIn();

    // Load user information
    $http.get('/api/users/' + $scope.id)
    	.success(function(user){
    		$scope.user = user;

        console.log($scope.user);
        console.log($scope.currentUser);
    	})
    	.error(function(resp){
    		$scope.error = "Error loading user";
    	})

    // Load user ratings
    $scope.loadRatings = function(){
        Ratings.search({ user : $scope.id },function(ratings){
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

    $scope.follow = function(id, boolean){
      $scope.following = boolean;
      console.log(boolean);

      // FALLOW
      if (boolean) {
        Auth.addFollower(id, function(resp){

          console.log(Auth.getCurrentUser())
          $scope.following = true;

        },function(resp){

        })

      // UNFOLLOW
      } else {
        Auth.removeFollower(id, function(resp){
          $scope.following = false;

        },function(resp){

        })
      }

    }

  });