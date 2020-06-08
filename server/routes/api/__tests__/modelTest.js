import { Pokemons } from '../apiModel';
import mongoose from 'mongoose';

describe('Pokemon Model', () => {
  describe('schema', () => {
    test('name', () => {
      const name = Pokemons.schema.obj.name;
      expect(name).toEqual({
        type: String,
        required: true
      });
    });

    test('name', () => {
      const id = Pokemons.schema.obj.id;
      expect(id).toEqual(String);
    });
  });
});
