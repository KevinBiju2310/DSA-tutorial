class treeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// class bst {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root === null;
//     }

//     insert(value) {
//         const newnode = new treeNode(value)
//         if (this.isEmpty()) {
//             this.root = newnode;
//         } else {
//             this.insertnode(this.root, newnode)
//         }
//     }

//     insertnode(root, newnode) {
//         if (newnode.value < root.value) {
//             if (root.left == null) {
//                 root.left = newnode;
//             } else {
//                 this.insertnode(root.left, newnode)
//             }
//         } else {
//             if (root.right == null) {
//                 root.right = newnode;
//             } else {
//                 this.insertnode(root.right, newnode)
//             }
//         }
//     }

//     search(root, value) {
//         if (!root) {
//             return false;
//         }
//         if (root.value === value) {
//             return true;
//         } else if (root.value < value) {
//             this.search(root.right, value);
//         } else {
//             this.search(root.left, value);
//         }
//     }

//     min(root) {
//         if (!root.left) {
//             return root.value;
//         } else {
//             this.min(root.left)
//         }
//     }

//     max(root) {
//         if (!root.right) {
//             return root.value;
//         } else {
//             this.max(root.right);
//         }
//     }

//     preOrder(root) {
//         if (root) {
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right);
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right);
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left);
//             this.postOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     delete(root, value) {
//         if (root === null) {
//             return root;
//         }
//         if (value < root.value) {
//             root.left = this.delete(root.left, value)
//         } else if (value > root.value) {
//             root.right = this.delete(root.right, value)
//         } else {
//             if (root.left === null) {
//                 return root.right;
//             } else if (root.right === null) {
//                 return root.left;
//             } else {
//                 root.value = this.min(root.right);
//                 root.right = this.delete(root.right, root.value)
//             }
//         }
//         return root;
//     }
// }

// const tree = new bst();

// tree.insert(50)
// tree.insert(10)
// tree.insert(40)
// tree.insert(80)
// tree.insert(33)

// console.log(tree)


class binarytree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
       return this.root === null
    }

    insert(value){
        const newnode = new treeNode(value);
        if(this.isEmpty()){
            this.root = newnode;
            return;
        }
        const queue = [this.root];
        while(queue.length>0){
            const node = queue.shift();
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
                queue.push(node.right);
            }
        }
    }

    
}