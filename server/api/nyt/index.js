'use strict';

var express = require('express');
var controller = require('./nyt.controller');

var router = express.Router();

router.get('/categories', controller.categories);

module.exports = router;