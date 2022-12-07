export class Directory {
  #name;
  #parent;
  #children;

  constructor(name) {
    this.#name = name;
    this.#children = new Set();
  }

  get name() {
    return this.#name;
  }

  set parent(parent) {
    this.#parent = parent;
  }

  get parent() {
    return this.#parent;
  }

  get children() {
    return this.#children;
  }

  get size() {
    let total = 0;

    for (const child of this.#children.values()) {
      total += child.size;
    }

    return total;
  }

  add(child) {
    this.#children.add(child);
    child.parent = this;
  }

  directory(name) {
    for (const child of this.#children.values()) {
      if (child.name === name && child instanceof Directory) {
        return child;
      }
    }
  }
}
