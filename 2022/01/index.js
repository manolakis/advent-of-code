import { readFile } from '@manolakis/aoc-common/readFile.js';
import { getMaxCaloriesConsumed, getCaloriesConsumedByTopThree } from "./algorithm.js";


export const execute = async () => {
  const data = await readFile(`./2022/01/input`);

  console.group('Day 01');
  console.log('Max calories consumed:', getMaxCaloriesConsumed(data));
  console.log('Top three calories consumed:', getCaloriesConsumedByTopThree(data));
  console.groupEnd();
};
