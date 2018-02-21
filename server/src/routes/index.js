import { Router } from 'express';
import peopleRouter from './people';
import chirpRouter from './chirps';

let router = Router();

router.use('/people', peopleRouter);
router.use('./chirps', chirpRouter);

export default router;