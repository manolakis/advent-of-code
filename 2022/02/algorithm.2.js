const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const LOSS = 0;
const DRAW = 3;
const WON = 6;

const types = {
  A: ROCK,
  B: PAPER,
  C: SCISSORS,
  X: LOSS,
  Y: DRAW,
  Z: WON,
}

const shapes = {
  [ROCK]: {
    [DRAW]: ROCK,
    [LOSS]: SCISSORS,
    [WON]: PAPER,
  },
  [PAPER]: {
    [WON]: SCISSORS,
    [DRAW]: PAPER,
    [LOSS]: ROCK,
  },
  [SCISSORS]: {
    [LOSS]: PAPER,
    [WON]: ROCK,
    [DRAW]: SCISSORS,
  },
}

export const round = input => {
  const [first, second] = input.split(' ');
  const opponent = types[first];
  const result = types[second];
  const me = shapes[opponent][result];

  return me + result;
};