import { Ship } from "./Ship.js";
import { readFile } from "@manolakis/aoc-common/readFile.js";
import { CrateMover9000 } from "./CrateMover9000.js";
import { CrateMover9001 } from "./CrateMover9001.js";
import { CratesOnTopOfEachStackPrinter } from "./CratesOnTopOfEachStackPrinter.js";

export const execute = async () => {
  const stacks = [
    'DLJRVGF',
    'TPMBVHJS',
    'VHMFDGPC',
    'MDPNGQ',
    'JLHNF',
    'NFVQDGTZ',
    'FDBL',
    'MJBSVDN',
    'GLD',
  ];

  const shipWithCraneMover9000 = new Ship({
    crane: new CrateMover9000(),
    stacks,
  }
  );
  const shipWithCraneMover9001 = new Ship({
    crane: new CrateMover9001(),
    stacks,
  }
  );

  const orders = await readFile(`./2022/05/input`);

  orders.forEach(order => {
    shipWithCraneMover9000.moveCrates(order);
    shipWithCraneMover9001.moveCrates(order);
  });

  const cratesOnTopOfEachStackPrinter = new CratesOnTopOfEachStackPrinter();

  console.group('Day 05');
  console.log('Crate that ends up on top of each stack with CraneMover 9000:', shipWithCraneMover9000.print(cratesOnTopOfEachStackPrinter));
  console.log('Crate that ends up on top of each stack with CraneMover 9001:', shipWithCraneMover9001.print(cratesOnTopOfEachStackPrinter));
  console.groupEnd();
};
