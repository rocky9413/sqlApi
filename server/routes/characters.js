import { Router } from 'express';

import pokeController from '../controllers/pokeController';

const router = Router();

// GET MORE CHARACTERS ROUTE HANDLER HERE
router.get(
  '/',
  pokeController.getMoreCharacters,
  // eslint-disable-next-line no-unused-vars
  (req, res, next) => {
    res.status(200).send({ newCharacters: res.locals.newCharacters });
  }
);

// GET CHARACTER DETAILS ROUTE HANDLER HERE
router.post(
  '/details/',
  pokeController.validateRequestCharacter,
  pokeController.getHomeworld,
  pokeController.getFilms,
  // eslint-disable-next-line no-unused-vars
  (req, res, next) => {
    // console.log(res.locals.homeworld);
    res
      .status(200)
      .send({ homeworld: res.locals.homeworld, films: res.locals.films });
  }
);
export default router;
