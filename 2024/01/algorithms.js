export const getDistance = (listA, listB) => {
  const distances = calculateDistances(listA, listB);

  return distances.reduce((acc, distance) => acc + distance);
};

const calculateDistances = (listA, listB) => {
  const distances = [];

  listA.forEach((valueA, index) => {
    const valueB = listB[index];

    distances.push(Math.abs(valueA - valueB));
  });

  return distances;
};

const cache = {};

export const getSimilarity = (listA, listB) => {
  const similarities = calculateSimilarities(listA, listB);
  const weights = calculateWeights(listA, similarities);

  return weights.reduce((acc, weight) => acc + weight);
};

const calculateSimilarities = (listA, listB) => {
  const similarities = [];

  listA.forEach(valueA => {
    if (!cache[valueA]) {
      cache[valueA] = listB.filter(valueB => valueA === valueB).length;
    }

    similarities.push(cache[valueA]);
  });

  return similarities;
};

const calculateWeights = (listA, similarities) => {
  const weights = [];

  listA.forEach((valueA, index) => {
    weights.push(valueA * similarities[index]);
  });

  return weights;
};
