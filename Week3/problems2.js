class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class Tree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const newnode = new TreeNode(value);
        if(this.isEmpty()){
            this.root = newnode;
            return;
        }

        const queue = [this.root];
        while(queue.length){
            let node = queue.shift();
            if(node.left === null){
                node.left = newnode;
                break;
            }else{
                queue.push(node.left)
            }

            if(node.right === null){
                node.right = newnode;
                break;
            }else{
                queue.push(node.right)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}

const binaryTree = new Tree();

binaryTree.insert(10);
binaryTree.insert(20);
binaryTree.insert(30);


console.log("PreOrder")
binaryTree.preOrder(binaryTree.root)

console.log("Inorder")
binaryTree.inOrder(binaryTree.root)


console.log("PostOrder")
binaryTree.postOrder(binaryTree.root)
// console.log(binaryTree)