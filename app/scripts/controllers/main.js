'use strict';

/**
 * @ngdoc function
 * @name nytBooksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nytBooksApp
 */
angular.module('nytBooksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
