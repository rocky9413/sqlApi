import Sequelize from 'sequelize';
import { sequelize } from '../../dbSe';

// Books table
export const Books = sequelize.define('books', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ISBN: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  available: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

export const BookOuts = sequelize.define('bookouts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  ISBN: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  available: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

// Users account table
export const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING
  }
});
