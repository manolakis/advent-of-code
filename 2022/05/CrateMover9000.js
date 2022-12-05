export class CrateMover9000 {
  move(stacks, quantity, origin, destiny) {
    for (let i = 0; i < quantity; i++) {
      const item = stacks[origin-1].pop();

      stacks[destiny-1].push(item);
    }
  }
}
