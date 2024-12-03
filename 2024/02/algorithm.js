const UNKNOWN = 0;
const INCREASING = 1;
const DECREASING = 2;

export const countSafeReports = input =>
  input.reduce((acc, report) => acc + (isReportSafe(report) ? 1 : 0), 0);

export const countSafeReportsWithOneMistake = input =>
  input.reduce((acc, report) => acc + (isReportSafe2(report) ? 1 : 0), 0);

export const isReportSafe = report => {
  let counter = 0;

  for (let index = 1; index < report.length; index++) {
    const previousElement = report[index - 1];
    const element = report[index];
    const difference = previousElement - element;

    if ([1, 2, 3].includes(Math.abs(difference))) {
      if (difference < 0) {
        counter += 1;
      } else {
        counter -= 1;
      }
    }
  }

  return Math.abs(counter) === report.length - 1;
};

const isReportSafe2 = report => report.map((value, index, array) =>
  array.slice(0, index).concat(array.slice(index + 1))
).some(isReportSafe);
