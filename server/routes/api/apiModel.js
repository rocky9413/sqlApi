import Sequelize from 'sequelize';
import { sequelize } from '../../dbSe';

export const Books = sequelize.define('books', {
  ISBN: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING
  },
  count: {
    type: Sequelize.NUMBER
  }
});
