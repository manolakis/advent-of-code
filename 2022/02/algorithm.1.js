const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const LOSS = 0;
const DRAW = 3;
const WON = 6;

const getType = input => {
  if (['A', 'X'].includes(input)) {
    return ROCK;
  }

  if (['B', 'Y'].includes(input)) {
    return PAPER;
  }

  return SCISSORS;
}

const outcomes = {
  [ROCK]: {
    [ROCK]: DRAW,
    [PAPER]: LOSS,
    [SCISSORS]: WON,
  },
  [PAPER]: {
    [ROCK]: WON,
    [PAPER]: DRAW,
    [SCISSORS]: LOSS,
  },
  [SCISSORS]: {
    [ROCK]: LOSS,
    [PAPER]: WON,
    [SCISSORS]: DRAW,
  },
}

export const round = input => {
  const [first, second] = input.split(' ');
  const opponent = getType(first);
  const me = getType(second);

  return me + outcomes[me][opponent];
};