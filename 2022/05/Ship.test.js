import {expect} from 'chai';
import {Ship} from "./Ship.js";
import {CrateMover9000} from "./CrateMover9000.js";
import {CrateMover9001} from "./CrateMover9001.js";
import {readFile} from "../../common/readFile.js";

describe('Ship', () => {

  context('toString', () => {
    it(`should print the top items of the stacks`, async () => {
      const ship = new Ship({
        stacks: ['ZN', 'MCD', 'P'],
      });
      const expectedResult = 'NDP';

      expect(ship.printCratesOnTopOfEachStack()).to.be.equal(expectedResult);
    });
  });

  context('with CrateMover 9000', () => {
    it(`should move the stacks`, async () => {
      const ship = new Ship({
        crane: new CrateMover9000(),
        stacks: ['ZN', 'MCD', 'P'],
      });
      const orders = await readFile(`./2022/05/test-input`);
      const expectedResult = 'CMZ';

      orders.forEach(order => ship.moveCrates(order));

      expect(ship.printCratesOnTopOfEachStack()).to.be.equal(expectedResult);
    });
  });

  context('with CrateMover 9001', () => {
    it(`should move the stacks`, async () => {
      const ship = new Ship({
        crane: new CrateMover9001(),
        stacks: ['ZN', 'MCD', 'P'],
      });
      const orders = await readFile(`./2022/05/test-input`);
      const expectedResult = 'MCD';

      orders.forEach(order => ship.moveCrates(order));

      expect(ship.printCratesOnTopOfEachStack()).to.be.equal(expectedResult);
    });
  });
});
