import {Directory} from "./Directory.js";


const findSmallestDirectorySize = (directory, freeSpace, requiredSize) => {
  const size = directory.size;

  let total;
  if (freeSpace + size >= requiredSize) {
    total = size;
  }

  for (const child of directory.children.values()) {
    if (child instanceof Directory) {
      const childSize = findSmallestDirectorySize(child, freeSpace, requiredSize);
      if (childSize && childSize < total) {
        total = childSize;
      }
    }
  }

  return total;
};

export const getSizeOfSmallestDirectoryThatCanBeDeleted = (fileSystem, diskSize, requiredSize) => {
  const freeSpace = diskSize - fileSystem.root.size;

  return findSmallestDirectorySize(fileSystem.root, freeSpace, requiredSize);
}
