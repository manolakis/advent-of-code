import { expect } from 'chai';
import { getMaxCaloriesConsumed, getCaloriesConsumedByTopThree } from "./algorithm.js";

describe('day 01', () => {

  context(`getMaxCaloriesConsumed`, () => {
    it(`should retrieve the maximum calories consumed by an Elf`, async () => {
      const input = `1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`;

      const expectedResult = 24000;

      expect(getMaxCaloriesConsumed(input)).to.be.eq(expectedResult);
    });
  });

  context(`getCaloriesConsumedByTopThree`,() => {
    it(`should retrieve the sum of calories of the top three`, async () => {
      const input = `1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`;

      const expectedResult = 45000;

      expect(getCaloriesConsumedByTopThree(input)).to.be.eq(expectedResult);
    });
  });
});