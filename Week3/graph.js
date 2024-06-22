// const matrix = [
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]

// // console.log(matrix[0][2]);


// const list = {
//     'A': ['B'],
//     'B': ['A','C'],
//     'C': ['B']
// }
// console.log(list['B']);


class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }


    bfs(vertex) {
        const result = [];
        const queue = [vertex];
        const visited = {}
        visited[vertex] = true;

        while (queue.length) {
            let currVertex = queue.shift();
            result.push(currVertex);
            this.adjacencyList[currVertex].forEach(n => {
                if (!visited[n]) {
                    visited[n] = true;
                    queue.push(n)
                }
            });
        }
        return result;
    }

    dfs(vertex){
        const visited = new Set();
        this.dfsTraverse(vertex,visited)
    }
    dfsTraverse(vertex,visited){
        visited.add(vertex);
        console.log(vertex);
        const neighbours = this.adjacencyList[vertex];
        for(let neighbour of neighbours){
            if(!visited.has(neighbour)){
                this.dfsTraverse(neighbour,visited);
            }
        }
    }

    display() {
        for (const vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge("A", "B")
graph.addEdge("B", "C")
graph.addEdge("C", "D")
graph.display()
console.log(graph.hasEdge("A", "B"));
console.log(graph.bfs("A"));
console.log(graph);