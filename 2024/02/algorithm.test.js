import { describe, it, expect } from "vitest";
import { isReportSafe, countSafeReports, countSafeReportsWithOneMistake } from "./algorithm.js";


const data = [
  [[7, 6, 4, 2, 1], true],
  [[1, 2, 7, 8, 9], false],
  [[9, 7, 6, 2, 1], false],
  [[1, 3, 2, 4, 5], false],
  [[8, 6, 4, 4, 1], false],
  [[1, 3, 6, 7, 9], true],
];

const dataToNormalize = [
  [[7, 6, 4, 2, 1], [7, 6, 4, 2, 1]],
  [[1, 2, 7, 8, 9], [1, 2, 7, 8, 9]],
  [[9, 7, 6, 2, 1], [9, 7, 6, 2, 1]],
  [[1, 3, 2, 4, 5], [1, 2, 4, 5]],
  [[8, 6, 4, 4, 1], [8, 6, 4, 1]],
  [[1, 3, 6, 7, 9], [1, 3, 6, 7, 9]],
];

describe('2024/02', () => {
  describe('isReportSafe', () => {
    data.forEach(([input, expected]) => {
      it(`should return ${expected} for input ${input}`, () => expect(isReportSafe(input)).toBe(expected));
    });
  });

  describe('countSafeReports', () => {
    it('shoud return 2 for data input', () => expect(countSafeReports(data.map(([array]) => array))).toBe(2));
  });

  describe('countSafeReportsWithOneMistake', () => {
    it('shoud return 4 for data input', () => expect(countSafeReportsWithOneMistake(data.map(([array]) => array))).toBe(4));
  });
});
