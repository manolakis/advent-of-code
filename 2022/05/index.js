import {Ship} from "./Ship.js";
import {readFile} from "../../common/readFile.js";
import {CrateMover9000} from "./CrateMover9000.js";
import {CrateMover9001} from "./CrateMover9001.js";

export const execute = async () => {
  const shipWithCraneMover9000 = new Ship({
      crane: new CrateMover9000(),
      stacks: [
        'DLJRVGF',
        'TPMBVHJS',
        'VHMFDGPC',
        'MDPNGQ',
        'JLHNF',
        'NFVQDGTZ',
        'FDBL',
        'MJBSVDN',
        'GLD',
      ],
    }
  );
  const shipWithCraneMover9001 = new Ship({
      crane: new CrateMover9001(),
      stacks: [
        'DLJRVGF',
        'TPMBVHJS',
        'VHMFDGPC',
        'MDPNGQ',
        'JLHNF',
        'NFVQDGTZ',
        'FDBL',
        'MJBSVDN',
        'GLD',
      ],
    }
  );

  const orders = await readFile(`./2022/05/input`);

  orders.forEach(order => {
    shipWithCraneMover9000.moveCrates(order);
    shipWithCraneMover9001.moveCrates(order);
  });

  console.group('Day 05');
  console.log('Ship with CraneMover 9000:', shipWithCraneMover9000.toString());
  console.log('Ship with CraneMover 9001:', shipWithCraneMover9001.toString());
  console.groupEnd();
};
