const getAssignmentRangePair = assignmentRangePair => assignmentRangePair.split(',')
  .map(getAssignmentRange);

const getAssignmentRange = assignmentRange => assignmentRange.split('-')
  .map((item) => parseInt(item, 10));

const checkIfFirstRangeFullyContainsTheOther = ([a1, a2], [b1, b2]) => (a1 <= b1 && a2 >= b2);

const checkIfOneRangeFullyContainsTheOther = ([first, second]) =>
  checkIfFirstRangeFullyContainsTheOther(first, second) || checkIfFirstRangeFullyContainsTheOther(second, first);

export const totalOfAssignmentsThatOneRangeFullyContainsTheOther = assignmentRangePairs => assignmentRangePairs
  .map(getAssignmentRangePair)
  .map(checkIfOneRangeFullyContainsTheOther)
  .reduce((total, rangeFullyContainsTheOther) => rangeFullyContainsTheOther ? total + 1 : total);

const checkIfFirstRangeOverlapsTheOther = ([a1, a2], [b1, b2]) => (a1 <= b1 && a2 >= b1) || (a1 <= b2 && a2 >= b2);

const checkIfRangesOverlap = ([first, second]) =>
  checkIfFirstRangeOverlapsTheOther(first, second) || checkIfFirstRangeOverlapsTheOther(second, first);

export const totalOfAssignmentsThatRangesOverlap = assignmentRangePairs => assignmentRangePairs
  .map(getAssignmentRangePair)
  .map(checkIfRangesOverlap)
  .reduce((total, rangeFullyContainsTheOther) => rangeFullyContainsTheOther ? total + 1 : total);
