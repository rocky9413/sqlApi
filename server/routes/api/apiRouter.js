import { Router } from 'express';
import controllers from './apiController';

const router = Router();

// router.route('/allPoke').get(controllers.checkNgetAll);

// router.route('/name').get(controllers.getOneByName);

router.route('/books').get(controllers.checkNgetAll);

router.route('/:id').get(controllers.getOneById);

// router.use('/allPoke', getPokemons, (req, res) => {
//   res.status(200).send({
//     characters: res.locals.characters,
//     favs: res.locals.favs
//   });
// });

// router.use('/:id', getPokemons, getById, (req, res) => {
//   res.status(200).send({ onePoke: res.locals.onePoke });
// });

export default router;
