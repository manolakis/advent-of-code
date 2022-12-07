import { expect } from 'chai';
import { FileSystem } from "./FileSystem.js";
import { Directory } from "./Directory.js";

describe('day 07', () => {
  describe(`Filesystem`, () => {
    it('should be constructable', function () {
      const fileSystem = new FileSystem();

      expect(fileSystem).to.not.be.undefined;
    });

    it('should set the pwd to the root by default', function () {
      const fileSystem = new FileSystem();

      expect(fileSystem.pwd).to.be.eq(fileSystem.root);
    });

    it('should be able to change the current directory', function () {
      const fileSystem = new FileSystem();
      const directory = new Directory('test');
      const dirA = new Directory('a');
      directory.add(dirA);
      fileSystem.pwd.add(directory);

      fileSystem.changeDirectory('test');
      fileSystem.changeDirectory('a');

      expect(fileSystem.pwd).to.be.eq(dirA);
    });

    it('should be able to change to the parent directory', function () {
      const fileSystem = new FileSystem();
      const directory = new Directory('test');
      directory.add(new Directory('a'));
      fileSystem.pwd.add(directory);
      fileSystem.changeDirectory('test');
      fileSystem.changeDirectory('a');

      fileSystem.changeDirectory('..');

      expect(fileSystem.pwd).to.be.eq(directory);
    });

    it('should be able to change to the root directory', function () {
      const fileSystem = new FileSystem();
      const directory = new Directory('test');
      directory.add(new Directory('a'));
      fileSystem.pwd.add(directory);
      fileSystem.changeDirectory('test');
      fileSystem.changeDirectory('a');

      fileSystem.changeDirectory('/');

      expect(fileSystem.pwd).to.be.eq(fileSystem.root);
    });
  });
});
