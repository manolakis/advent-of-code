import { readFile } from "@manolakis/aoc-common/readFile.js";
import { countSafeReports, countSafeReportsWithOneMistake } from "./algorithm.js";

const data = await readFile(new URL('./input', import.meta.url));
const input = data.map((line) => line.split(' '));

console.log('Safe reports:', countSafeReports(input));
console.log('Safe reports with one mistake:', countSafeReportsWithOneMistake(input));
