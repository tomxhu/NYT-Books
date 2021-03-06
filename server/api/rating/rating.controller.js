'use strict';

var _ = require('lodash');
var Rating = require('./rating.model');
var url  = require('url');


// Get list of ratings
exports.index = function(req, res) {
  Rating.find(function (err, ratings) {
    if(err) { return handleError(res, err); }
    return res.json(200, ratings);
  });
};

// Search for user ratings
exports.search = function(req, res) {

  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  
  console.log(query);

  Rating.find(query, function (err, ratings) {
    if(err) { return handleError(res, err); }
    return res.json(200, ratings);
  });
};

// Get a single rating
exports.show = function(req, res) {
  Rating.findById(req.params.id, function (err, rating) {
    if(err) { return handleError(res, err); }
    if(!rating) { return res.send(404); }
    return res.json(rating);
  });
};

// Creates a new rating in the DB.
exports.create = function(req, res) {
  Rating.find({user: req.body.user, isbn13: req.body.isbn13}, function (err, ratings){

    if (!ratings.length) {
      Rating.create(req.body, function(err, rating) {
        if(err) { return handleError(res, err); }
        return res.json(201, rating);
      });
    } else {
      return res.send(200);
    }
  });
};

// Updates an existing rating in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Rating.findById(req.params.id, function (err, rating) {
    if (err) { return handleError(res, err); }
    if(!rating) { return res.send(404); }
    var updated = _.merge(rating, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, rating);
    });
  });
};

// Deletes a rating from the DB.
exports.destroy = function(req, res) {
  Rating.findById(req.params.id, function (err, rating) {
    if(err) { return handleError(res, err); }
    if(!rating) { return res.send(404); }
    rating.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}