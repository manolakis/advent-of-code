import { readFile } from "@manolakis/aoc-common/readFile.js";
import { getDistance, getSimilarity } from "./algorithms.js";

const transformToSortedLists = input => {
  const listA = [];
  const listB = [];

  input.forEach(line => {
    const [valueA, valueB] = line.split('   ');
    listA.push(valueA);
    listB.push(valueB);
  });

  listA.sort();
  listB.sort();

  return { listA, listB };
}

const data = await readFile(new URL('./input', import.meta.url));
const { listA, listB } = transformToSortedLists(data);

console.log('Distance:', getDistance(listA, listB));
console.log('Similarity:', getSimilarity(listA, listB));
