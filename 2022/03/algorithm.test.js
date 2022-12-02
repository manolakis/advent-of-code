import { expect } from 'chai';
import { compute } from "./algorithm.js";

describe('day 03', () => {
  [
    ['A', 'A'],
  ].forEach(([input, value]) => {
    xit(`to be defined`, async () => {
      expect(compute(input)).to.be.equal(value);
    });
  });
});
