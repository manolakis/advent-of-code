import { readFile } from '../../common/readFile.js';
import { round as round1 } from './algorithm.1.js';
import { round as round2 } from './algorithm.2.js';

const data = await readFile('./input');

let partOne = 0;
let partTwo = 0;

data.split(/\r?\n/).forEach(input => {
  partOne += round1(input);
  partTwo += round2(input);
});

console.log('Part one:', partOne);
console.log('Part two:', partTwo);