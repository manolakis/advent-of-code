import {readFile} from "../../common/readFile.js";
import {getCalibrationValues, getFixedCalibrationValues} from "./algorithm.js";

export const execute = async () => {
  const data = await readFile(`./2023/01/input`);

  console.group('Day 01');
  console.log('Calibration values:', getCalibrationValues(data));
  console.log('Fixed calibration values:', getFixedCalibrationValues(data));
  console.groupEnd();
};
