import { readFile } from '@manolakis/aoc-common/readFile.js';
import { round as round1 } from './algorithm.1.js';
import { round as round2 } from './algorithm.2.js';

export const execute = async () => {
  const data = await readFile(`./2022/02/input`);

  let firstStrategy = 0;
  let secondStrategy = 0;

  data.forEach(input => {
    firstStrategy += round1(input);
    secondStrategy += round2(input);
  });

  console.group('Day 02');
  console.log('Total score first strategy:', firstStrategy);
  console.log('Total score second strategy:', secondStrategy);
  console.groupEnd();
};
