import { expect } from 'chai';
import {readFile} from "../../common/readFile.js";
import {FileSystem} from "./FileSystem.js";
import { getTotalSizeOfDirectoriesWithSizeAtMost } from "./getTotalSizeOfDirectoriesWithSizeAtMost.js";

describe('day 07', () => {
  describe(`getTotalSizeOfDirectoriesWithSizeAtMost`, () => {
    it('should be constructable', async () => {
      const commandLines = await readFile(`./2022/07/test-input`);
      const fileSystem = new FileSystem({ commandLines });

      expect(getTotalSizeOfDirectoriesWithSizeAtMost(fileSystem, 100000)).to.be.eq(95437);
    });
  });
});
