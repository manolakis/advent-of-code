export class File {
  #name;
  #parent;
  #size;

  constructor(name, size) {
    this.#name = name;
    this.#size = size;
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

  get size() {
    return this.#size;
  }
}
