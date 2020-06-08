import mongoose from 'mongoose';

const myURI =
  'mongodb+srv://rocky:ilovetesting@rlcluster-cy0q7.mongodb.net/test?retryWrites=true&w=majority';

export const URI = process.env.MONGO_URI || myURI; // DB URI

// Create Message Schema
const PokeSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  classification: String,
  types: Array,
  resistant: Array,
  weaknesses: Array,
  weight: Object,
  height: Object,
  fleeRate: Number,
  evolutionRequirements: Object,
  evolutions: Array,
  maxCP: Number,
  maxHP: Number,
  attacks: Object
});

// // use pre method to save the current time
// PokeSchema.pre('save', function(next) {
//   // get current date
//   let currDate = new Date();
//   this.created_at = currDate;
//   // check if created_at exist
//   if (!this.created_at) this.created_at = currDate;
//   next();
// });

// PokeSchema.index({ id: 1, name: 1 }, { unique: true });

export const Pokemons = mongoose.model('Pokemons', PokeSchema);
