
 const getCaloriesList = data => {
  const list = [];
  let elf = 0;

  data.forEach(input => {
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

export const getCaloriesConsumedByTopThree = data => getCaloriesList(data)
  .sort((a, b) => b-a)
  .slice(0, 3)
  .reduce((total, calories) => total + calories);

