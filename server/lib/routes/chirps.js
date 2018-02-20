'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var router = (0, _express.Router)();

var queries = require('../filestore');

// function find(id) {
//     return chirpMessage.filter(c => c.id == id)[0];
//   }


// READ - read all
router.get('/', function (req, res) {
    res.json(queries.GetChirps());
    console.log('got chirps');
});

// READ - read one
router.get('/:id', function (req, res) {
    res.json(queries.GetChirp('./chirps/' + chirps.id));
    console.log(req.params.id);
});

// CREATE - creates one
router.post('/', function (req, res) {
    queries.CreateChirp(req.params.id, req.body);
    res.redirect('./chirps/' + chirps.id);
    console.log('created a chirp');
});

// router.post('/', (req, res) => {
//     queries.CreateChirp(req.body);
//     res.sendStatus(200);
//     console.log('posted');
// });

// // Update - show update form
// router.put('/:id/edit', (req, res) => {
//   queries.UpdateChirp(req.params.id, req.body)
//     console.log(req.params.id);
//     console.log('updated chirp');
// });


// UPDATE - updates one
router.put('/:id', function (req, res) {
    queries.UpdateChirp('./chirps/' + chirps.id);
    res.redirect('./chirps');
    console.log('updated a chirp');
});

// DELETE - deletes one
router.delete('/:id', function (req, res) {
    queries.DeleteChirp('./chirps/' + chirps.id);
    res.redirect('./chirps');
    console.log(req.params.id);
    console.log('deleted a chirp');
});

exports.default = router;