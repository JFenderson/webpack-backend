'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _people = require('./people');

var _people2 = _interopRequireDefault(_people);

var _chirps = require('./chirps');

var _chirps2 = _interopRequireDefault(_chirps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/people', _people2.default);
router.use('/chirps', _chirps2.default);

exports.default = router;