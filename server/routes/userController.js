import { Users } from './api/apiModel';

export const adminLogin = async (req, res, next) => {
  const { username } = req.body;
  try {
    const result = await Users.findAll({ where: { username, role: 'admin' } });

    if (result.length !== 0) {
      return next();
    } else {
      res.status(201).json({ notAdmin: 'Your not Authorized to Enter!' });
    }
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getUserId = async (req, res, next) => {
  const { username } = req.body;
  try {
    const result = await Users.findAll({ where: { username } });
    if (result.length !== 0) {
      res.locals.name = username;
    }
    return next();
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
