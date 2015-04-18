'use strict';

// Router for homepage
var express = require('express');
var controller = require('./nyt.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/categories', controller.categories);

module.exports = router;