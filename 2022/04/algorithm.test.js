import { expect } from 'chai';
import { readFile } from "@manolakis/aoc-common/readFile.js";
import { totalOfAssignmentsThatOneRangeFullyContainsTheOther, totalOfAssignmentsThatRangesOverlap } from "./algorithm.js";

describe('day 04', () => {

  it(`should get the total of assignments that one range fully contains the other`, async () => {
    const assignmentPairs = await readFile(`./04/test-input`);
    const expectedResult = 2;

    expect(totalOfAssignmentsThatOneRangeFullyContainsTheOther(assignmentPairs)).to.be.equal(expectedResult);
  });

  it(`should get the total of assignments that ranges overlap`, async () => {
    const assignmentPairs = await readFile(`./04/test-input`);
    const expectedResult = 4;

    expect(totalOfAssignmentsThatRangesOverlap(assignmentPairs)).to.be.equal(expectedResult);
  });
});
