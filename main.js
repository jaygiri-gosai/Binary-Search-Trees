import { Tree } from "./node.js";

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 125];
let tree = new Tree(arr);

console.log(tree.rebalance());
