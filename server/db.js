import Sequelize from 'sequelize';

const URL =
  'postgres://pperepky:w18mHP8S0d7v3mwkzA6niXljqTWvw6gE@ruby.db.elephantsql.com:5432/pperepky';

const sequelize = new Sequelize(URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

// sequelize.sync({ logging: false }).then(() => {});

sequelize
  .authenticate()
  .then(() => console.log('SQLite Connected.'))
  .catch(err => console.error('Unable to connect db:', err));

export default sequelize;

// var pg = require('pg');
// //or native libpq bindings
// //var pg = require('pg').native

// var conString = "INSERT_YOUR_POSTGRES_URL_HERE" //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });
