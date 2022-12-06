export class CratesOnTopOfEachStackPrinter {
  print(stacks) {
    return stacks
      .map(stack => stack.at(-1))
      .join('');
  }
}
