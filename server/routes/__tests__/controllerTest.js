import { checkNgetAll, getOneById, getOneByName } from '../modelController';
import { Pokemons } from '../api/apiModel';
import mongoose from 'mongoose';

describe('crud controllers', () => {
  describe('getOneById', () => {
    test('404 if not found', async () => {
      expect.assertions(2);
      const _id = mongoose.Types.ObjectId();
      const req = { _id };
      const res = {
        status(status) {
          expect(status).toBe(400);
          return this;
        },
        end() {
          expect(true).toBe(true);
        }
      };

      await getOneById(Pokemons)(req, res);
    });
  });
});
