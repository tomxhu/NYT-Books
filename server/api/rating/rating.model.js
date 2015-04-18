'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RatingSchema = new Schema({
	isbn13 : String, 
	rating : Number,
	user : String,
});

module.exports = mongoose.model('Rating', RatingSchema);