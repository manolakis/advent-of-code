import { expect } from 'chai';
import { readFile } from "@manolakis/aoc-common/readFile.js";
import { getSumOfPossibleGames, getSumOfThePowerOfMinimumSets } from "./algorithm.js";

describe('2023 - day 02', () => {
  context(`getSumOfPossibleGames`, () => {
    it(`should retrieve the calibration values`, async () => {
      const input = await readFile(`./02/test-input`);
      const expectedResult = 8;

      expect(getSumOfPossibleGames(input, [12, 13, 14])).to.be.eq(expectedResult);
    });
  });

  context(`getSumOfThePowerOfMinimumSets`, () => {
    it(`should retrieve the calibration values`, async () => {
      const input = await readFile(`./02/test-input`);
      const expectedResult = 2286;

      expect(getSumOfThePowerOfMinimumSets(input)).to.be.eq(expectedResult);
    });
  });
});
