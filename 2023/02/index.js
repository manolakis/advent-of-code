import { readFile } from "@manolakis/aoc-common/readFile.js";
import { getSumOfPossibleGames, getSumOfThePowerOfMinimumSets } from "./algorithm.js";

export const execute = async () => {
  const input = await readFile(`./2023/02/input`);

  console.group('Day 02');
  console.log('Sum of possible games:', getSumOfPossibleGames(input, [12, 13, 14]));
  console.log('Sum of the power of minimum sets:', getSumOfThePowerOfMinimumSets(input));
  console.groupEnd();
};
