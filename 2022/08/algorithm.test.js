import { expect } from 'chai';
import { readFile } from "@manolakis/aoc-common/readFile.js";
import { getNumberOfTreesVisibleFromOutsideTheGrid, getHighestScenicScore } from "./algorithm.js";

describe('day 08', () => {
  it(`should get the number of trees visible from outside the grid`, async () => {
    const input = await readFile(`./08/test-input`);
    const expectedValue = 21;

    expect(getNumberOfTreesVisibleFromOutsideTheGrid(input)).to.be.equal(expectedValue);
  });

  it(`should get the highest scenic score`, async () => {
    const input = await readFile(`./08/test-input`);
    const expectedValue = 8;

    expect(getHighestScenicScore(input)).to.be.equal(expectedValue);
  });
});
