'use strict';

// Settings Controller 
angular.module('nytBooksApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, Ratings) {
    $scope.errors = {};

    var userId = Auth.getCurrentUser()._id;

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

    $scope.addFollower = function (follow) {
      Auth.addFollower(123).then(function(result){
        console.log(result);
      })
    }

    $scope.removeFollower = function (follow) {
      Auth.removeFollower(123).then(function(result){
        console.log(result);
      })
    }

    // loads ratings for that user to be managed
    $scope.loadRatings = function(){

        var query = { user : userId };

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
