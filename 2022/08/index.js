import { getNumberOfTreesVisibleFromOutsideTheGrid, getHighestScenicScore } from "./algorithm.js";
import { readFile } from "@manolakis/aoc-common/readFile.js";

export const execute = async () => {
  const input = await readFile(`./2022/08/input`);

  const treesVisibleFromOutsideTheGrid = getNumberOfTreesVisibleFromOutsideTheGrid(input);
  const highestScenicScore = getHighestScenicScore(input);

  console.group('Day 08');
  console.log('Number of trees visible from outside the grid:', treesVisibleFromOutsideTheGrid);
  console.log('Highest scenic score:', highestScenicScore);
  console.groupEnd();
};
