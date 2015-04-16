'use strict';

angular.module('nytBooksApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      {
      getFavorites: {
        method: 'GET',
        params: {
          controller:'favorites'
        }
      },
      {
      getReviews: {
        method: 'GET',
        params: {
          controller:'reviews'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
