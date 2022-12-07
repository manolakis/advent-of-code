import { expect } from 'chai';
import { Directory } from "./Directory.js";
import {File} from "./File.js";

describe('day 07', () => {
  describe(`Directory`, () => {
    it('should be constructable', function () {
      const directory = new Directory('/');

      expect(directory).to.not.be.undefined;
    });

    it('should return the name', function () {
      const directory = new Directory('/');

      expect(directory.name).to.be.eq('/');
    });

    it('should return undefined if is the root', function () {
      const directory = new Directory('/');

      expect(directory.parent).to.be.undefined;
    });

    it('should return the parent', function () {
      const root = new Directory('/');
      const directory = new Directory('test');

      directory.parent = root;

      expect(directory.parent).to.be.eq(root);
    });

    it('should return size 0 if it does not contain children', function () {
      const directory = new Directory('/');

      expect(directory.size).to.be.eq(0);
    });

    it('should be able to add a child directory', function () {
      const root = new Directory('/');
      const directory = new Directory('test');

      root.add(directory);

      expect(root.children.has(directory)).to.be.true;
    });

    it('should add itself as parent in child directories', function () {
      const root = new Directory('/');
      const directory = new Directory('test');

      root.add(directory);

      expect(directory.parent).to.be.eq(root);
    });

    it('should be able to add a child file', function () {
      const root = new Directory('/');
      const file = new File('test', 0);

      root.add(file);

      expect(root.children.has(file)).to.be.true;
    });

    it('should add itself as parent in child files', function () {
      const root = new Directory('/');
      const file = new File('test', 0);

      root.add(file);

      expect(file.parent).to.be.eq(root);
    });

    it('should return as size the sum of their children sizes', function () {
      const root = new Directory('/');
      const directory = new Directory('test');
      const file1 = new File('file1', 10);
      const file2 = new File('file2', 10);
      const file3 = new File('file3', 10);

      root.add(directory);
      root.add(file1);
      root.add(file2);
      directory.add(file3);

      expect(directory.size).to.be.eq(10);
      expect(root.size).to.be.eq(30);
    });

    context('directory', () => {

      it('should return undefined trying to find a non existent child directory', function () {
        const root = new Directory('/');

        expect(root.directory('test')).to.be.undefined;
      });

      it(`should get a child directory by it's name`, function () {
        const root = new Directory('/');
        const directory = new Directory('test');

        root.add(directory);

        expect(root.directory('test')).to.be.eq(directory);
      });

      it(`should not retrieve a file`, function () {
        const root = new Directory('/');
        const file = new File('test', 0);

        root.add(file);

        expect(root.directory('test')).to.be.undefined;
      });
    });
  });
});
