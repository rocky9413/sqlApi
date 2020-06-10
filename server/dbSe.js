import Sequelize from 'sequelize';

const myURI =
  'postgres://vamhjecs:y9C4Zf7tW8o6znVdtY46RzQB81PaSbif@salt.db.elephantsql.com:5432/vamhjecs';
const dbURI = process.env.PG_URI || myURI;

export const sequelize = new Sequelize(dbURI, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
});
