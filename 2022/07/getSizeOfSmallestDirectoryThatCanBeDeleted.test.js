import {expect} from 'chai';
import {readFile} from "../../common/readFile.js";
import {FileSystem} from "./FileSystem.js";
import {getSizeOfSmallestDirectoryThatCanBeDeleted} from "./getSizeOfSmallestDirectoryThatCanBeDeleted.js";

describe('day 07', () => {
  describe(`getSizeOfSmallestDirectoryThatCanBeDeleted`, () => {
    it('should find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update', async () => {
      const commandLines = await readFile(`./2022/07/test-input`);
      const fileSystem = new FileSystem({commandLines});

      expect(getSizeOfSmallestDirectoryThatCanBeDeleted(fileSystem, 70000000, 30000000)).to.be.eq(24933642);
    });
  });
});
