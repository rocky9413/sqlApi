import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

export const checkNgetAll = model => async (req, res, next) => {
  // read file to get all books data
  const books = await JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../data/books.json'), 'UTF-8')
  );

  if (!books) {
    return next({
      log: 'ERROR: Error getting data from books.json file',
      message: {
        err: 'Error in readFile'
      }
    });
  }

  try {
    await books.forEach(elem => {
      const result = model.findOne({ id: elem.id });
      if (!result.id) {
        model.collection.insertOne(elem);
      }
    });

    const result = await model
      .find({})
      .lean()
      .exec();

    res.status(200).json({
      characters: result,
      favs: res.locals.favs
    });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

export const createOne = model => async (req, res) => {
  const createdBy = req.user._id;
  try {
    const doc = await model.create({ ...req.body, createdBy });
    res.status(201).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getOneByName = model => async (req, res, next) => {
  try {
    const { pokeName } = req.body;
    const result = await model
      .findOne({ name: pokeName })
      .lean()
      .exec();

    if (!result) {
      return res
        .status(400)
        .send({ notExist: 'pokemon id not exist!!' })
        .end();
    }
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

export const getOneById = model => async (req, res) => {
  try {
    const id = req.params.id === ':id' ? req.body.pokeId : req.params.id;
    const result = await model
      .findOne({ id })
      .lean()
      .exec();

    if (!result) {
      return res
        .status(400)
        .send({ notExist: 'pokemon id not exist!!' })
        .end();
    }
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

export const removeOne = model => async (req, res) => {
  try {
    const id = req.body.pokeId;
    const removed = await model.findOneAndRemove({ id });

    if (!removed) {
      return res
        .status(400)
        .send({ notExist: 'error tring to remove!' })
        .end();
    }
    return res.status(200).json({ removed });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

export const modelController = model => ({
  checkNgetAll: checkNgetAll(model),
  getOneByName: getOneByName(model),
  getOneById: getOneById(model),
  removeOne: removeOne(model),
  createOne: createOne(model)
});
