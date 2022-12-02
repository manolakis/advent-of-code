
 const getCaloriesList = data => {
  const list = [];
  let elf = 0;

  data.split(/\r?\n/).forEach(input => {
    const value = input.trim();

    if (value === '') {
      list.push(elf);
      elf = 0;
    } else {
      elf += parseInt(value, 10);
    }
  });

  if (elf > 0) {
    list.push(elf);
  }

  return list;
};

export const getMaxCaloriesConsumed = data => Math.max(...getCaloriesList(data));

export const getCaloriesConsumedByTopThree = data => {
  const [first, second, third] = getCaloriesList(data).sort((a, b) => b-a);

  return first + second + third;
};

