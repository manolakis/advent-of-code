import { readFile } from "@manolakis/aoc-common/readFile.js";
import { getSumOfGroupsPriorities, getSumOfPriorities } from "./algorithm.js";

export const execute = async () => {
  const data = await readFile(`./2022/03/input`);

  const sumOfPriorities = getSumOfPriorities(data);
  const sumOfGroupsPriorities = getSumOfGroupsPriorities(data);

  console.group('Day 03');
  console.log('Sum of priorities:', sumOfPriorities);
  console.log('Sum of groups priorities:', sumOfGroupsPriorities);
  console.groupEnd();
};
