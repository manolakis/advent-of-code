import { expect } from 'chai';
import { compute } from "./algorithm.js";

describe('day 05', () => {
  [
    ['A', 'A'],
  ].forEach(([input, value]) => {
    it(`should return ${value} when round is ${input}`, async () => {
      expect(compute(input)).to.be.equal(value);
    });
  });
});