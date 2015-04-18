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
      addFollower: {
        method: 'POST',
        params: {
          controller:'addFollower'
        }
      },
      removeFollower: {
        method: 'POST',
        params: {
          controller:'removeFollower'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      list: {
        method: 'GET',
        isArray: true,
      }
	  });
  });
