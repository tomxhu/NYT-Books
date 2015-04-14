/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var http = require('http');
var _ = require('lodash');

// Return list of categories
exports.categories = function(req, res) {

  var api_url = 'http://api.nytimes.com/svc/books/v2/lists/names?api-key=2929e63191572000a0ca99908abab2d3:1:71850106';

  // Hit NYT API
  http.get(api_url,  function(response){

    // Collect results
    var body = ''

    // Console status
    console.log('\nResponse is ' + response.statusCode);

    // Accumulate data response from
    // third party API
    response.on('data', function (chunk) {
        body += chunk;
     });

    response.on('end', function () {

        console.log('\nData From API:')
        console.log(body)

        // if(err) { return handleError(res, err); }

        return res.json(200, JSON.parse(body));
    });

  });
};

function handleError(res, err) {
  return res.send(500, err);
}