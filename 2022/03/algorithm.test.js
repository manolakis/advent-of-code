import {expect} from 'chai';
import {readFile} from "../../common/readFile.js";
import {getSumOfPriorities, getSumOfGroupsPriorities} from "./algorithm.js";

describe('day 03', () => {

  it(`should get the sum of priorities of the rucksacks`, async () => {
    const rucksacks = await readFile(`./2022/03/test-input`);
    const expectedResult = 157;

    expect(getSumOfPriorities(rucksacks)).to.be.equal(expectedResult);
  });

  it(`should get the sum of priorities of the groups of rucksacks`, async () => {
    const rucksacks = await readFile(`./2022/03/test-input`);
    const expectedResult = 70;

    expect(getSumOfGroupsPriorities(rucksacks)).to.be.equal(expectedResult);
  });

});
