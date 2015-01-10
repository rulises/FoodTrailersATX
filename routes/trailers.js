var express = require('express');
var router = express.Router();

var Trailer = require('../models/trailers.js');

/* GET trailers listing. */
router.get('/', function(req, res, next) {
	Trailer.find(function (err, trailers) {
		if (err) return next(err);
	  	res.json(trailers);
	});
});

/* POST /trailers */
router.post('/', function(req, res, next) {
	Trailer.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* GET /trailers/id */
router.get('/:id', function(req, res, next) {
	Trailer.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
	Trailer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
	Trailer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;
