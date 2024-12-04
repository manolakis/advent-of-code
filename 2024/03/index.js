import { readFile } from "@manolakis/aoc-common/readFile.js";
import { addAllMultiplications, addAllUnfilteredMultiplications } from "./algorithm.js";

const lines = await readFile(new URL('./input', import.meta.url));
const data = lines.join(``);

console.log('sum of all multiplications:', addAllMultiplications(data));
console.log('sum of all unfiltered multiplications:', addAllUnfilteredMultiplications(data));
