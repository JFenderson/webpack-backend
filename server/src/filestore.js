const fs = require('fs');
const shortid = require('shortid');
const path = require('path');

const chirpsPath = path.join(__dirname, '..', 'chirps.json');

let chirps = [];

if (fs.existsSync(chirpsPath)) {
    chirps = JSON.parse(fs.readFileSync(chirpsPath));
}

let getChirps = () => {
    return Promise.resolve([...chirps]);
};

let getChirp = id => {
    const found = chirps.find((chirp) => chirp.id === id);
    return Promise.resolve(Object.assign({}, found));
};

let createChirp = (chirp) => {
    return new Promise((resolve, reject) => {
        const id = shortid.generate();

        chirp.id = id;
        chirps = [...chirps, chirp];
        writeChirps();
        resolve(id);
    });
};

let updateChirp = (id, chirp) => {
    return new Promise((resolve, reject) => {
        const foundIndex = chirps.findIndex((chirp) => chirp.id === id);
        const found = chirps[foundIndex];
        const updatedChirp = Object.assign({}, found, chirp);
        chirps.splice(foundIndex, 1);
        chirps = [...chirps, updatedChirp];
        writeChirps();
        resolve();
    });
};

let deleteChirp = id => {
    return new Promise((resolve, reject) => {
        const foundIndex = chirps.findIndex((chirp) => chirp.id === id);
        chirps.splice(foundIndex, 1);
        writeChirps();
        resolve();
    });
};

let writeChirps = () => {
    fs.writeFileSync(chirpsPath, JSON.stringify(chirps));
};

module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
};