const regex = /mul\((?<a>\d{1,3}),(?<b>\d{1,3})\)/g;
const filteredRegex = /(do\(\)|don't\(\)|mul\((?<a>\d{1,3}),(?<b>\d{1,3})\))/g;

const sumMatches = matches => matches
  .map(({ groups: { a, b } }) => ({ a: parseInt(a), b: parseInt(b) }))
  .reduce((acc, { a, b }) => acc + (a * b), 0);

export const addAllMultiplications = data => sumMatches(data.matchAll(regex));

export const addAllUnfilteredMultiplications = data => {
  let on = true;

  const matches = data.matchAll(filteredRegex)
    .reduce((acc, match) => {
      if (match[0] === 'do()') {
        on = true;
      } else if (match[0] === 'don\'t()') {
        on = false;
      } else if (on) {
        return [...acc, match];
      }

      return acc;
    }, []);

  return sumMatches(matches);
};
