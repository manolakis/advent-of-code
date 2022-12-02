import { expect } from 'chai';
import { round as round1 } from "./algorithm.1.js";
import { round as round2 } from "./algorithm.2.js";

describe('day 02', () => {
  context('part one', () => {
    [
      ['A Y', 8],
      ['B X', 1],
      ['C Z', 6],
    ].forEach(([input, value]) => {
      it(`should return ${value} when round is ${input}`, async () => {
        expect(round1(input)).to.be.equal(value);
      });
    });
  });

  context('part two', () => {
    [
      ['A Y', 4],
      ['B X', 1],
      ['C Z', 7],
    ].forEach(([input, value]) => {
      it(`should return ${value} when round is ${input}`, async () => {
        expect(round2(input)).to.be.equal(value);
      });
    });
  });
});