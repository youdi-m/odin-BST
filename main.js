import {Tree} from './binarySearchTree.js';

// random array for testing
let treeArr = Array.from({length: 13}, () => Math.floor(Math.random() * 21));

let tree = new Tree(treeArr);

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}


prettyPrint(tree.root);