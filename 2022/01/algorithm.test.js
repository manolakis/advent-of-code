import { expect } from 'chai';
import { readFile } from "../../common/readFile.js";
import { getMaxCaloriesConsumed, getCaloriesConsumedByTopThree } from "./algorithm.js";

describe('day 01', () => {

  context(`getMaxCaloriesConsumed`, () => {
    it(`should retrieve the maximum calories consumed by an Elf`, async () => {
      const input = await readFile(`./2022/01/test-input`);
      const expectedResult = 24000;

      expect(getMaxCaloriesConsumed(input)).to.be.eq(expectedResult);
    });
  });

  context(`getCaloriesConsumedByTopThree`,() => {
    it(`should retrieve the sum of calories of the three Elves carrying the most Calories`, async () => {
      const input = await readFile(`./2022/01/test-input`);
      const expectedResult = 45000;

      expect(getCaloriesConsumedByTopThree(input)).to.be.eq(expectedResult);
    });
  });
});
