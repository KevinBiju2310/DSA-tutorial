class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    collectwords(node,prefix){
        let words = [];
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for(let char in node.children){
            words = words.concat(this.collectwords(node.children[char],prefix+char))
        }
        return words;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        return this.collectwords(node,prefix);
    }

    removeword(value){
        this.remove(this.root,value,0)
    }

    remove(node,value,index){
        if(index === value.length){
            if(!node.isEndOfWord){
                return false;
            }
            node.isEndOfWord = false;
            console.log(Object.keys(node.children).length);
            return Object.keys(node.children).length === 0;
        }
        const char = value[index];
        const childnode = node.children[char];
        console.log("char : ",char);
        console.log("childnode : ",childnode)
        if(!childnode){
            return false;
        }
        const deleteChild = this.remove(childnode,value,index+1);
        console.log(deleteChild);
        if(deleteChild){
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }
        return false;
    }   
}

const trie = new Trie();

trie.insert("hello");
trie.insert("hai");
trie.insert("hellicopter");
trie.removeword("hello");

console.log(trie.search("hello"));
console.log(trie.startsWith("he"));
