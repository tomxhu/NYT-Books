'use strict';

/**
 * @ngdoc function
 * @name nytBooksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nytBooksApp
 */
angular.module('nytBooksApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
