import {Directory} from "./Directory.js";
import {File} from "./File.js";

const execute = (fs, commandLine) => {
  const tokens = commandLine.split(' ');

  if (tokens[0] === '$') {
    if (tokens[1] === 'cd') {
      fs.changeDirectory(tokens[2]);
    }
  } else {
    if (tokens[0] === 'dir') {
      fs.pwd.add(new Directory(tokens[1]));
    } else {
      fs.pwd.add(new File(tokens[1], parseInt(tokens[0], 10)));
    }
  }
}

export class FileSystem {
  #root;
  #pwd;

  constructor({ commandLines = []} = {}) {
    this.#root = new Directory('/');
    this.#pwd = this.#root;

    commandLines.forEach(commandLine => execute(this, commandLine));
    this.#pwd = this.#root;
  }

  get root() {
    return this.#root;
  }

  get pwd() {
    return this.#pwd;
  }

  changeDirectory(name) {
    let directory;

    if (name === '..') {
      directory = this.#pwd.parent;
    } else if (name === '/') {
      directory = this.root;
    } else {
      directory = this.#pwd.directory(name);
    }

    if (directory) {
      this.#pwd = directory;
    }
  }

  print(printer) {
    return printer.print(this.#root);
  }
}
