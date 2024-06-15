class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size;
        this.numItems = 0;
    }

    hash(key) {
        let total = 0;
        let keystring = key.toString()
        console.log(keystring)
        for (let i = 0; i < keystring.length; i++) {
            total += keystring.charCodeAt(i)
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        // this.table[index] = value;
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
            this.numItems++;
        } else {
            const samekeyItem = bucket.find(item => item[0] === key);
            if (samekeyItem) {
                samekeyItem[1] = value;
            } else {
                bucket.push([key, value])
                this.numItems++
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        // return this.table[index];
        const bucket = this.table[index];
        if (bucket) {
            const samekeyItem = bucket.find(item => item[0] === key)
            if (samekeyItem) {
                return samekeyItem[1]
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        // this.table[index] = undefined;
        const bucket = this.table[index];
        if (bucket) {
            const samekeyItem = bucket.find(item => item[0] === key)
            console.log(samekeyItem);
            if (samekeyItem) {
                bucket.splice(bucket.indexOf(samekeyItem), 1);
                this.numItems--;
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }

    loadfactor(){
        return this.numItems/this.size;
    }
}

const table = new HashTable(50);

table.set(123, "kevin")
table.set("age", 23)
table.set(132,"Aravind")
table.display()
console.log(table.loadfactor())


// table.set("mane", "jose")
// table.display()
// console.log(table.get("name"))


// table.remove("mane")

// table.display()