const transformToRGB = game => {
  const [,cubes] = game.split(':')

  return cubes.split(';')
    .map(value => value.split(',')
      .map(value => {
        const num = parseInt(value, 10);

        if (value.includes('red')) {
          return [num, 0, 0];
        }

        if (value.includes('blue')) {
          return [0, num, 0];
        }

        return [0, 0, num];
      })
      .reduce((acc, [red, green, blue]) =>
        [acc[0] + red, acc[1] + green, acc[2] + blue], [0, 0, 0])
    );
};

export const getSumOfPossibleGames = (games, [red, green, blue]) =>
  games.map((game, index) => [index + 1, transformToRGB(game)])
    .filter(([,cubes]) => cubes.reduce((acc, game) =>
      acc && game[0] <= red && game[1] <= blue && game[2] <= green, true))
    .reduce((acc, [index]) => acc + index, 0);


export const getSumOfThePowerOfMinimumSets = games =>
  games.map(game => transformToRGB(game))
    .map(sets => sets.reduce((acc, [red, green, blue]) => {
      return [
        Math.max(acc[0], red),
        Math.max(acc[1], green),
        Math.max(acc[2], blue),
      ];
    }, [0,0,0]))
    .map(([red, green, blue]) => red * green * blue)
    .reduce((acc, value) => acc + value, 0);
