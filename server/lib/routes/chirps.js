'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var express = require('express');
var queries = require('../filestore');
var cors = require('cors');
var router = express.Router();

var app = express();
app.use(cors());

// READ - read all
router.get('/', function (req, res, next) {
    queries.GetChirps().then(function (chirps) {
        res.send(chirps);
    });
    console.log('got chirps');
});

// READ - read one
router.get('/:id', function (req, res) {
    var id = req.params.id;

    queries.GetChirp(id).then(function (chirp) {
        res.send(chirp);
    });
    console.log(req.params.id);
});

// CREATE - creates one
router.post('/', function (req, res, next) {
    var id = req.params.id;
    queries.CreateChirp(req.body).then(function (id) {
        res.status(201).json({ id: id });
    });
    console.log('created a chirp');
});

// UPDATE - updates one
router.put('/:id', function (req, res) {
    queries.UpdateChirp(req.params.id, req.body).then(function () {
        res.sendStatus(204);
    });
    console.log('updated a chirp');
});

// DELETE - deletes one
router.delete('/:id', function (req, res) {
    queries.DeleteChirp(id).then(function () {
        res.sendStatus(204);
    });
    console.log('deleted a chirp');
});

exports.default = router;