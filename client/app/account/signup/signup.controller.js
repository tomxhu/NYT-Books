'use strict';

angular.module('nytBooksApp')
  .controller('SignupCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.authors = [
      "http://i.imgur.com/gwZdiVs.jpg?1",
      "http://i.imgur.com/aTawZtP.jpg?1",
      "http://i.imgur.com/ZFUMfvQ.jpg?1",
      "http://i.imgur.com/JvKt5Bv.jpg?1",
    ]

    $scope.register = function(form) {

      console.log($scope.user)
      
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          profileImg: $scope.user.profileImg,
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

  });
