'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fs = require('fs');
var shortid = require('shortid');
var path = require('path');

var chirpsPath = path.join(__dirname, '..', 'chirps.json');

var chirps = [];

if (fs.existsSync(chirpsPath)) {
    chirps = JSON.parse(fs.readFileSync(chirpsPath));
}

var getChirps = function getChirps() {
    return Promise.resolve([].concat(_toConsumableArray(chirps)));
};

var getChirp = function getChirp(id) {
    var found = chirps.find(function (chirp) {
        return chirp.id === id;
    });
    return Promise.resolve(Object.assign({}, found));
};

var createChirp = function createChirp(chirp) {
    return new Promise(function (resolve, reject) {
        var id = shortid.generate();

        chirp.id = id;
        chirps = [].concat(_toConsumableArray(chirps), [chirp]);
        writeChirps();
        resolve(id);
    });
};

var updateChirp = function updateChirp(id, chirp) {
    return new Promise(function (resolve, reject) {
        var foundIndex = chirps.findIndex(function (chirp) {
            return chirp.id === id;
        });
        var found = chirps[foundIndex];
        var updatedChirp = Object.assign({}, found, chirp);
        chirps.splice(foundIndex, 1);
        chirps = [].concat(_toConsumableArray(chirps), [updatedChirp]);
        writeChirps();
        resolve();
    });
};

var deleteChirp = function deleteChirp(id) {
    return new Promise(function (resolve, reject) {
        var foundIndex = chirps.findIndex(function (chirp) {
            return chirp.id === id;
        });
        chirps.splice(foundIndex, 1);
        writeChirps();
        resolve();
    });
};

var writeChirps = function writeChirps() {
    fs.writeFileSync(chirpsPath, JSON.stringify(chirps));
};

module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
};