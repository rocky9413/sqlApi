import { Router } from 'express';
import {
  addBook,
  removeBook,
  overdueBook,
  checkBook,
  returnBook,
  listUserBook
} from '../bookController';
import { adminLogin, getUserId } from '../userController';

const router = Router();

const auth = async (req, res) => {
  const { username } = req.body;
  // console.log('username entered: ', username);
  try {
    const result = await Users.findAll({ where: { username, role: 'admin' } });
    if (result.length !== 0) {
      res.redirect('/librarian');
    } else {
      res.redirect('/users');
    }
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

router.route('/login').get(auth);

// librarian endpoint | Enter username, ISBN and title to add Book, enter id to remove
router
  .route('/librarian')
  .get(adminLogin, overdueBook)
  .post(adminLogin, addBook)
  .delete(adminLogin, removeBook);

// user endpoint | Enter username and/or ISBN in req.body to query
router
  .route('/users')
  .get(getUserId, listUserBook)
  .post(getUserId, checkBook)
  .delete(getUserId, returnBook);

export default router;

// Books
// "ISBN": "1491950358", "title": "Building Microservices"
// "ISBN": "0984782850", "title": "Cracking the coding Interview"
// "ISBN": "0134494164", "title": "Clearn Architecture"
// "ISBN": "0201633612", "title": "Design Patterns"
