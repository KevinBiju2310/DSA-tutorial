class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newnode = new Node(value);
    if (this.isEmpty()) {
      this.root = newnode;
      return;
    }

    const queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      if (node.left === null) {
        node.left = newnode;
        break;
      } else {
        queue.push(node.left);
      }

      if (node.right === null) {
        node.right = newnode;
        break;
      } else {
        queue.push(node.right);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
}

const bt = new BinaryTree();

// bt.insert(5)
// bt.insert(7)
// bt.insert(9)
// bt.insert(2)
// bt.insert(1)

// bt.preOrder(bt.root)
