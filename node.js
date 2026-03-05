class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    // Filter out the duplicate
    arr = arr.filter((item, index) => arr.indexOf(item) === index);

    // Sort the array
    arr = arr.sort((a, b) => a - b);
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    if (arr.length === 0) return null;

    // Find the root node
    let start = 0;
    let end = arr.length - 1;
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = this.buildTree(arr.slice(0, mid));
    node.right = this.buildTree(arr.slice(mid + 1));

    return node;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }

  includes(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.data) {
        return true;
      } else if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.data) return;
      if (value < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  delete(value) {
    if (!this.root) {
      return;
    }
    let parent = null;
    let currentNode = this.root;
    while (currentNode && currentNode.data !== value) {
      parent = currentNode;
      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    if (!currentNode) return; // not found

    if (!currentNode.left && !currentNode.right) {
      if (!parent) {
        this.root = null;
      } else if (parent.left === currentNode) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (!currentNode.left || !currentNode.right) {
      const child = currentNode.left || currentNode.right;

      if (!parent) {
        this.root = child;
      } else if (parent.left === currentNode) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    } else {
      let succParent = currentNode;
      let succ = currentNode.right;

      while (succ.left) {
        succParent = succ;
        succ = succ.left;
      }
      currentNode.data = succ.data;
      if (succParent.left === succ) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }
    }
  }

  getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) curr = curr.left;
    return curr;
  }

  levelOrderForEach(arg) {
    if (typeof arg !== "function") {
      throw new Error("Callback is required!");
    }
    if (!this.root) return;

    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      arg(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback is required!");
    }

    const stack = [];
    let current = this.root;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      callback(current.data);

      current = current.right;
    }
  }

  preOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback is required!");
    }

    if (!this.root) return;
    const stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();
      callback(node.data);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }

  postOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback is required!");
    }

    const stack = [];
    let current = this.root;
    let lastVisited = null;

    while (current || stack.length > 0) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        const peekNode = stack[stack.length - 1];
        if (peekNode.right && lastVisited !== peekNode.right) {
          current = peekNode.right;
        } else {
          callback(peekNode.data);
          lastVisited = stack.pop();
        }
      }
    }
  }

  height(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.data) {
        return this.getHeight(currentNode);
      } else if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return undefined;
  }

  getHeight(node) {
    if (!node) return -1;
    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  depth(value) {
    let currentNode = this.root;
    let depth = 0;

    while (currentNode) {
      if (value === currentNode.data) {
        return depth;
      } else if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      depth++;
    }
    return undefined;
  }

  isBalanced() {
    return this.checkBalance(this.root);
  }

  checkBalance(node) {
    if (!node) return true;

    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return this.checkBalance(node.left) && this.checkBalance(node.right);
  }

  rebalance() {
    if (this.isBalanced()) return true;

    const values = [];

    this.inOrderForEach((value) => {
      values.push(value);
    });

    this.root = this.buildTree(values);
  }
}

export { Tree };
