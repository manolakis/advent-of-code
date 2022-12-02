import { readFile } from '../../common/readFile.js';

import { getMaxCaloriesConsumed, getCaloriesConsumedByTopThree } from "./algorithm.js";

const data = await readFile('./input');

console.log('Max calories consumed:', getMaxCaloriesConsumed(data));
console.log('Top three calories consumed:', getCaloriesConsumedByTopThree(data));
