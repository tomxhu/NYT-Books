'use strict';

angular.module('nytBooksApp')
  .factory('Review', function ($resource) {
    return $resource('/api/review/:id', {
    },
    {
      createReviews: {
        method: 'POST'
      },
      getReviews: {
        method: 'GET',
        params: {
          id: '@_id'
        }
      },
      deleteReviews: {
        method: 'DELETE',
        params: {
          id: '@_id'
        }
      },
      editReviews: {
        method: 'POST',
        params: {
          id: '@_id'
        }
      }
	  });
  });
