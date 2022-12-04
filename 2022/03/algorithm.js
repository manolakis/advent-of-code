const findTheSharedItem = rucksack => {
  const items = [...rucksack];
  const firstCompartment = items.slice(0, items.length / 2);
  const secondCompartment = items.slice(items.length / 2);

  return firstCompartment.find(item => secondCompartment.includes(item));
};

const PRIORITIES = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getPriority = item => PRIORITIES.indexOf(item);

export const getSumOfPriorities = rucksacks => rucksacks
  .map(findTheSharedItem)
  .map(getPriority)
  .reduce((sum, priority) => sum + priority);

const divideRucksacksByGroups = rucksacks => {
  const groupsOfRucksacks = [];

  for (let index = 0; index < rucksacks.length; index += 3) {
    groupsOfRucksacks.push(rucksacks.slice(index, index + 3));
  }

  return groupsOfRucksacks;
}

const findTheSharedItemInGroup = ([first, second, third]) => [...first]
  .filter(item => second.includes(item))
  .find(item => third.includes(item));

export const getSumOfGroupsPriorities = rucksacks => divideRucksacksByGroups(rucksacks)
  .map(findTheSharedItemInGroup)
  .map(getPriority)
  .reduce((sum, priority) => sum + priority);
