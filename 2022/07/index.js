import {readFile} from "../../common/readFile.js";
import {FileSystem} from "./FileSystem.js";
import {getTotalSizeOfDirectoriesWithSizeAtMost} from "./getTotalSizeOfDirectoriesWithSizeAtMost.js";
import {getSizeOfSmallestDirectoryThatCanBeDeleted} from "./getSizeOfSmallestDirectoryThatCanBeDeleted.js";

export const execute = async () => {
  const commandLines = await readFile(`./2022/07/input`);
  const fileSystem = new FileSystem({ commandLines });

  console.group('Day 07');
  console.log(
    'Sum of the size of all of the directories with a total size of at most 100000:',
    getTotalSizeOfDirectoriesWithSizeAtMost(fileSystem, 100000),
    );
  console.log(
    'Size of the smallest directory that, if deleted, would free up enough space on the filesystem to run the update:',
    getSizeOfSmallestDirectoryThatCanBeDeleted(fileSystem, 70000000, 30000000),
    );
  console.groupEnd();

};
