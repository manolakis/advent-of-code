import { expect } from 'chai';
import { readFile } from "@manolakis/aoc-common/readFile.js";
import { getCalibrationValues, getFixedCalibrationValues } from "./algorithm.js";

describe('2023 - day 01', () => {

  context(`getCalibrationValues`, () => {
    it(`should retrieve the calibration values`, async () => {
      const input = await readFile(`./01/test-input`);
      const expectedResult = 142;

      expect(getCalibrationValues(input)).to.be.eq(expectedResult);
    });
  });

  context(`getFixedCalibrationValues`, () => {
    it(`should retrieve the calibration values`, async () => {
      const input = await readFile(`./01/test2-input`);
      const expectedResult = 281;

      expect(getFixedCalibrationValues(input)).to.be.eq(expectedResult);
    });
  });

});
