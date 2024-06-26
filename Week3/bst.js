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

    delete(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.delete(root.left, value)
        } else if (value > root.value) {
            root.right = this.delete(root.right, value)
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.delete(root.right, root.value)
        }
        return root;
    }

    height(root){
        if(root === null){
            return -1;
        }

        let leftTree = this.height(root.left);
        let rightTree = this.height(root.right);
        return Math.max(leftTree,rightTree)+1;
    }

    isBST() {
        function checkBST(node, min, max) {
            if(node === null){
                return true;
            }

            if((min!=null && node.value<=min)||(max!=null && node.value>=max)){
                return false;
            }
            return checkBST(node.left,min,node.value) && checkBST(node.right,node.value,max);
        }
        return checkBST(this.root,null,null)
    }

    isBalanced(){
        const height = this.height.bind(this)
        function checkBalance(node){
            if(node === null){
                return true;
            }
            let leftHeight = height(node.left);
            let rightHeight = height(node.right);

            if(Math.abs(leftHeight-rightHeight)<=1 && checkBalance(node.left) && checkBalance(node.right)){
                return true;
            }
            return false;
        }
        return checkBalance(this.root);
    }


    isComplete(){
        if(!this.root){
            return true;
        }

        let queue = [this.root];
        let foundnull = false;
        while(queue.length){
            let node = queue.shift();
            if(node === null){
                foundnull = true;
            }else{
                if(foundnull){
                    return false;
                }
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        return true;
    }
}

const bst = new binarySearchTree()

bst.insert(50)
bst.insert(30)
bst.insert(70)
bst.insert(40)
// console.log(bst.search(bst.root,25));
// bst.levelOrder()
console.log(bst.height(bst.root))

console.log(bst.isBST());
console.log(bst.isBalanced())
console.log(bst.isComplete())
// bst.delete(bst.root,5)
// bst.levelOrder()
