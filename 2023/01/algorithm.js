const getFirstDigit = line => parseInt(line.at(0), 10) * 10;
const getLastDigit = line => parseInt(line.at(-1), 10);

const toArrayOfDigits = input => Array.of(...input).filter(char => !isNaN(char));

export const getCalibrationValues = lines => lines
  .map(line => toArrayOfDigits(line))
  .map(line => getFirstDigit(line) + getLastDigit(line))
  .reduce((acc, value) => acc + value, 0);

const numberNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const replaceNamesByDigits = (replace, compareFn) =>
    line => numberNames.map((name) => replace(line, name, numberNames.indexOf(name) + 1))
      .sort(compareFn)
      .map(([,line]) => line)
      .pop();

const replaceLtR = (line, name, digit) => {
  const index = line.indexOf(name);
  const chars = [...line];

  if (index !== -1) {
    chars.splice(index, name.length, digit);
  }

  return [index === -1 ? 10_000_000 : index, chars.join('')];
};

const replaceNamesByDigitsLtR = line => replaceNamesByDigits(replaceLtR, ([a], [b]) => b - a)(line);

const replaceRtL = (line, name, digit) => {
  const index = line.lastIndexOf(name);
  const chars = [...line];

  if (index !== -1) {
    chars.splice(index, name.length, digit);
  }

  return [index, chars.join('')];
};

const replaceNamesByDigitsRtL = line => replaceNamesByDigits(replaceRtL, ([a], [b]) => a - b)(line);

export const getFixedCalibrationValues = lines => lines
  .map(line =>[replaceNamesByDigitsLtR(line), replaceNamesByDigitsRtL(line)])
  .map(([left, right]) => [toArrayOfDigits(left), toArrayOfDigits(right)])
  .map(([left, right]) => getFirstDigit(left) + getLastDigit(right))
  .reduce((acc, value) => acc + value, 0);
