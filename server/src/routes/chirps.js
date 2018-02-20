import { Router } from 'express';

let router = Router();

const queries = require('../filestore');

// function find(id) {
//     return chirpMessage.filter(c => c.id == id)[0];
//   }


// READ - read all
router.get('/', (req, res) => {
    res.json(queries.GetChirps())
    console.log('got chirps');
});


// READ - read one
router.get('/:id', (req, res) => {
    res.json(queries.GetChirp(`./chirps/${chirps.id}`));
    console.log(req.params.id);
});

// CREATE - creates one
router.post('/', (req, res) => {
  queries.CreateChirp(req.params.id, req.body)
      res.redirect(`./chirps/${chirps.id}`);
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
router.put('/:id', (req, res) => {
    queries.UpdateChirp(`./chirps/${chirps.id}`)
      res.redirect(`./chirps`);
      console.log('updated a chirp');
});

// DELETE - deletes one
router.delete('/:id', (req, res) => {
    queries.DeleteChirp(`./chirps/${chirps.id}`)
      res.redirect('./chirps');
      console.log(req.params.id);
      console.log('deleted a chirp');
});

export default router;
