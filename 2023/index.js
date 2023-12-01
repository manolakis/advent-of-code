import { asyncForEach } from "../common/asyncForEach.js";


console.group('2023');

const days = [...Array(32)
  .keys()]
  .slice(1)
  .map(number => number.toString().padStart(2, '0'));

await asyncForEach(days, async (day) => {

  const problem = await import(`./${day}/index.js`);
  if (Object.prototype.hasOwnProperty.call(problem, 'execute')) {
    await problem.execute();
  }
});

console.groupEnd();
