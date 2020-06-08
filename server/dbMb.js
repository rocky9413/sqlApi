import mongoose from 'mongoose';

const myURI =
  'mongodb+srv://rocky:ilovetesting@rlcluster-cy0q7.mongodb.net/test?retryWrites=true&w=majority';
const dbURI = process.env.MONGO_URI || myURI;

export const dbMbConnect = (URI = dbURI, opts = {}) => {
  // // connect to MongoDb
  return mongoose
    .connect(URI, { ...opts, useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err));
};
