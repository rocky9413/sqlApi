import express from 'express';
import cors from 'cors';
// import path from 'path';

// import { dbMbConnect } from './dbMb';
import { sequelize } from './dbSe';
import apiRouter from './routes/api/apiRouter';

export const app = express();

// handle cors | parsing request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve the bundle.js as a static file
// app.use(express.static(path.resolve(__dirname, '../dist')));

// serving index.html // setting header | status | file
// app.get('/', (req, res) => {
//   res.set({ 'Content-Type': 'text/html', charset: 'UTF-8' })
//     .status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
// });

// serving apiRouter
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
// eslint-disable-next-line no-unused-vars
app.use('/*', (req, res, next) => res.status(404).send());

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, { ...err });
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message.err);
});

export const server = async () => {
  try {
    // await dbMbConnect();
    await sequelize
      .sync({ logging: false })
      .then(() => console.log('sql connected.'));

    // await sequelize
    //   .authenticate()
    //   .then(() => console.log('SQL Connected.'))
    //   .catch(err => console.error('Unable to connect db:', err));

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, console.log(`Server listen on port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};
