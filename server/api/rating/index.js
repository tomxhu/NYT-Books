'use strict';

// Routes for ratings
var express = require('express');
var controller = require('./rating.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;