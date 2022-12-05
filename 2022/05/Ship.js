const ORDER_REGEXP = /move (?<quantity>\d+) from (?<origin>\d+) to (?<destiny>\d+)/;

export class Ship {
  crane;
  #stacks;

  constructor({crane, stacks} = {}) {
    this.crane = crane;
    this.#stacks = stacks.map(stack => [...stack]);
  }

  moveCrates(order) {
    const { groups: {quantity, origin, destiny}} = ORDER_REGEXP.exec(order);

    this.crane.move(this.#stacks, quantity, origin, destiny);
  }

  toString() {
    return this.#stacks
      .map(stack => stack.at(-1))
      .join('');
  }
}
