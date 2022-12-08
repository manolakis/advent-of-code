const convertIntoTreeNodes = grid => grid.map(row =>
  row.map(height => ({
    height,
    visible: false,
    score: 1,
  })));

const processTree = grid => grid.map(row => {
  let maxHeight = -1;

  row.forEach((tree, index) => {
    tree.score *= howManyTreesCanViewLookingLeft(row, index, tree.height);

    if (tree.height > maxHeight) {
      tree.visible = true;
      maxHeight = tree.height;
    }
  });

  return row;
});

const howManyTreesCanViewLookingLeft = (row, index, treeHeight) => {
  let trees = 0;

  for (let i = index; i > 0; i--) {
    const tree = row[i - 1];
    trees += 1;
    if (treeHeight <= tree.height) {
      break;
    }
  }

  return trees;
};

const rotateGrid = grid =>
  grid[0].map((val, index) => grid.map(row => row[index]).reverse());

const countVisibleTrees = grid => grid
  .map(row => row.reduce((acc, {visible}) => acc + (visible ? 1 : 0), 0))
  .reduce((acc, counter) => acc + counter, 0);

const toGrid = input => input.map(row => [...row]);

const processGrid = grid => [grid]
  .map(convertIntoTreeNodes)
  .map(processTree)
  .map(rotateGrid)
  .map(processTree)
  .map(rotateGrid)
  .map(processTree)
  .map(rotateGrid)
  .map(processTree)
  .shift();

export const getNumberOfTreesVisibleFromOutsideTheGrid = input => countVisibleTrees(processGrid(toGrid(input)));

export const getHighestScenicScore = input => processGrid(toGrid(input))
  .map(row => row
    .reduce((acc, {score}) => Math.max(acc, score), 0))
  .reduce((acc, score) => Math.max(acc, score), 0);
