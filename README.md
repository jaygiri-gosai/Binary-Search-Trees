# Binary Search Tree (BST)

This project is part of **The Odin Project – Full Stack JavaScript curriculum**.
The goal of this assignment is to implement a **Binary Search Tree (BST)** from scratch and practice fundamental data structure concepts including recursion, tree traversal, balancing, and tree properties.

---

## 📚 Concepts Practiced

- Binary Search Tree structure
- Recursion
- Tree traversal algorithms
- Breadth-First Search (BFS)
- Depth-First Search (DFS)
- Tree height and depth
- Balanced vs unbalanced trees
- Rebalancing a tree

---

## 🧠 What is a Binary Search Tree?

A Binary Search Tree is a hierarchical data structure where each node contains a value and has at most two children.

The BST property:

```
Left subtree values  <  Node value  <  Right subtree values
```

Example:

```
        50
       /  \
     30    70
    / \    / \
   20 40  60 80
```

This structure allows efficient searching, insertion, and deletion.

---

## ⚙️ Features Implemented

The project implements a complete BST with the following methods.

### Tree Construction

| Method             | Description                               |
| ------------------ | ----------------------------------------- |
| `buildTree(array)` | Builds a balanced BST from a sorted array |
| `insert(value)`    | Inserts a value into the tree             |
| `delete(value)`    | Removes a node from the tree              |

---

### Searching

| Method            | Description                                |
| ----------------- | ------------------------------------------ |
| `includes(value)` | Returns `true` if value exists in the tree |

---

### Traversal Methods

| Method                | Traversal Type                    |
| --------------------- | --------------------------------- |
| `levelOrderForEach()` | Breadth-First traversal           |
| `preOrderForEach()`   | Depth-First (Root → Left → Right) |
| `inOrderForEach()`    | Depth-First (Left → Root → Right) |
| `postOrderForEach()`  | Depth-First (Left → Right → Root) |

Example inorder traversal output:

```
10 → 20 → 30 → 40 → 50
```

---

### Tree Metrics

| Method          | Description                                         |
| --------------- | --------------------------------------------------- |
| `height(value)` | Returns the height of a node (longest path to leaf) |
| `depth(value)`  | Returns distance from root to node                  |

Example:

```
Height = longest path downward
Depth  = distance from root
```

---

### Tree Balance

| Method         | Description                             |
| -------------- | --------------------------------------- |
| `isBalanced()` | Checks if tree is balanced              |
| `rebalance()`  | Rebuilds tree into a balanced structure |

A tree is considered balanced when:

```
| height(left subtree) - height(right subtree) | ≤ 1
```

---

## 🧪 Example Usage

```javascript
import { Tree } from "./tree.js";

const tree = new Tree([10, 20, 30, 40, 50, 60, 70]);

tree.insert(25);
tree.delete(60);

tree.inOrderForEach((value) => console.log(value));

console.log("Height:", tree.height(40));
console.log("Depth:", tree.depth(25));

console.log("Balanced:", tree.isBalanced());

tree.rebalance();
```

---

## 📂 Project Structure

```
.
├── node.js
├── tree.js
├── main.js
└── README.md
```

---

## 🎯 Learning Outcomes

Through this project I learned:

- How Binary Search Trees store and organize data
- Implementing recursive algorithms
- Differences between BFS and DFS traversal
- Calculating tree height and depth
- Detecting and fixing unbalanced trees
- Translating algorithmic thinking into JavaScript code

---

## 🚀 Future Improvements

Possible extensions:

- Self-balancing trees (AVL / Red-Black Tree)
- Visual tree rendering
- Performance benchmarking
- Unit tests

---

## 📖 Acknowledgment

This project is part of **The Odin Project – Full Stack JavaScript Path**.

https://www.theodinproject.com/
