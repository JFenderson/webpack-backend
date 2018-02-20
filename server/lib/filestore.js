'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chirps = { nextid: 0 };

if (_fs2.default.existsSync('chirps.json')) {
    chirps = JSON.parse(_fs2.default.readFileSync('chirps.json'));
}

var getChirps = function getChirps() {
    return Object.assign({}, chirps); //create a copy and return it
};

var getChirp = function getChirp(id) {
    return Object.assign({}, chirps[id]); //create a copy and return it
};

var createChirp = function createChirp(chirp) {
    chirps[chirps] = chirp;
    writeChirps();
};

var updateChirp = function updateChirp(id, chirp) {
    chirps[id] = chirp;
    writeChirps();
};

var deleteChirp = function deleteChirp(id) {
    delete chirps[id];
    writeChirps();
};

var writeChirps = function writeChirps() {
    _fs2.default.writeFileSync('chirps.json', JSON.stringify(chirps));
};

module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
};