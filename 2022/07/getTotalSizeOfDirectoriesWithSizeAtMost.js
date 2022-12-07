import {Directory} from "./Directory.js";


const getTotalSize = (directory, maximumSize) => {
  const size = directory.size;

  let total = (size <= maximumSize) ? size : 0;

  for (const child of directory.children.values()) {
    if (child instanceof Directory) {
      total += getTotalSize(child, maximumSize);
    }
  }

  return total;
}

export const getTotalSizeOfDirectoriesWithSizeAtMost = (fileSystem, maximumSize) =>
  getTotalSize(fileSystem.root, maximumSize);
