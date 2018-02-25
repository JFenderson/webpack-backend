const express = require('express');
const queries = require('../filestore');
const cors = require('cors');
let router = express.Router();

let app = express();
app.use(cors());



// READ - read all
router.get('/', (req, res, next) => {
    queries.GetChirps()
        .then((chirps)=>{
            res.send(chirps);
        })
    console.log('got chirps');
});


// READ - read one
router.get('/:id', (req, res) => {
    const id = req.params.id;

    queries.GetChirp(id)
    .then((chirp)=>{
        res.send(chirp);
    });
    console.log(req.params.id);
});

// CREATE - creates one
router.post('/', (req, res, next) => {
    const id = req.params.id;
  queries.CreateChirp(req.body)
      .then((id)=>{
          res.status(201).json({ id });
      })
      console.log('created a chirp');
});


// UPDATE - updates one
router.put('/:id', (req, res) => {
    queries.UpdateChirp(req.params.id, req.body)
      .then(() => {
          res.sendStatus(204);
      })
      console.log('updated a chirp');
});

// DELETE - deletes one
router.delete('/:id', (req, res) => {
    queries.DeleteChirp(id)
      .then(()=>{
          res.sendStatus(204);
      })
      console.log('deleted a chirp');
});

export default router;
