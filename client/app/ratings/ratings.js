'use strict';

angular.module('nytBooksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ratings', {
        url: '/ratings',
        templateUrl: 'app/ratings/ratings.html',
        controller: 'RatingsCtrl'
      });
  });