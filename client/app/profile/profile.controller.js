'use strict';

angular.module('nytBooksApp')
  .controller('ProfileCtrl', function ($scope, $http, $stateParams) {
    
    $scope.error = null;

    var id = $stateParams.id;

    $http.get('/api/user/' + id)
    	.success(function(user){
    		$scope.user = user;
    	})
    	.error(function(resp){
    		$scope.error = "Error loading user";
    	})


  });
