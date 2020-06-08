import Sequelize from 'sequelize';

const myURI =
  'postgres://pperepky:w18mHP8S0d7v3mwkzA6niXljqTWvw6gE@ruby.db.elephantsql.com:5432/pperepky';
const dbURI = process.env.PG_URI || myURI;

export const sequelize = new Sequelize(dbURI, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
});
