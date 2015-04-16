'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RatingSchema = new Schema({
  user: String,
  rating: Number,
});

module.exports = mongoose.model('Rating', RatingSchema);