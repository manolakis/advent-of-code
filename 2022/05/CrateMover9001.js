export class CrateMover9001 {
  move(stacks, quantity, origin, destiny) {
    const items = stacks[origin-1].splice(quantity * -1);

    stacks[destiny-1].push(...items);
  }
}
