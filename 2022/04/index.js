import { totalOfAssignmentsThatOneRangeFullyContainsTheOther, totalOfAssignmentsThatRangesOverlap } from "./algorithm.js";
import {readFile} from "../../common/readFile.js";

export const execute = async () => {
  const data = await readFile(`./2022/04/input`);

  const assignmentThatOneRangeFullyContainsTheOther = totalOfAssignmentsThatOneRangeFullyContainsTheOther(data);
  const assignmentThatRangesOverlap = totalOfAssignmentsThatRangesOverlap(data);

  console.group('Day 04');
  console.log('Assignment pairs that one range fully contain the other:', assignmentThatOneRangeFullyContainsTheOther);
  console.log('Assignment pairs that ranges overlap:', assignmentThatRangesOverlap);
  console.groupEnd();
};
