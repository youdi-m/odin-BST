import {Tree} from './binarySearchTree.js';
import {prettyPrint} from './helper.js'

// random array for testing
let treeArr = Array.from({length: 13}, () => Math.floor(Math.random() * 21));

let tree = new Tree(treeArr);

//print the tree
prettyPrint(tree.root);