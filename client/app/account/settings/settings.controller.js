'use strict';

// Settings Controller 
angular.module('nytBooksApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, Ratings) {
    $scope.errors = {};

    $scope.user = Auth.getCurrentUser();

    // to change password from old to new
    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};

    $scope.addFollower = function (id) {
      Auth.addFollower(id).then(function(result){
        $scope.user = Auth.getCurrentUser();
        console.log($scope.user)
      })
    }

    $scope.removeFollower = function (id) {
      Auth.removeFollower(id).then(function(result){
        $scope.user = Auth.getCurrentUser();
        console.log($scope.user)
      })
    }

    // loads ratings for that user to be managed
    $scope.loadRatings = function(){

        var query = { user : $scope.user._id };

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
