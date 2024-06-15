class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newnode = new Node(value);
        if (this.isEmpty()) {
            this.root = newnode;
        } else {
            this.insertnode(this.root, newnode)
        }
    }
    insertnode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left === null) {
                root.left = newnode;
            } else {
                this.insertnode(root.left, newnode)
            }
        } else {
            if (root.right === null) {
                root.right = newnode;
            } else {
                this.insertnode(root.right, newnode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
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

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
}

const bst = new binarySearchTree()

bst.insert(10)
bst.insert(15)
bst.insert(20)
bst.insert(5)
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
