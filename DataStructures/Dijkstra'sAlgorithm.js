///////////////////////////
// Dijkstra's Algorithm //
/////////////////////////

// Dijkstra's Algorithm finds the shortest path between two vertices on a graph

// Dijkstra's Algorithm is still widely used in:
// GPS
// Network routing
// Biology
// Airline tickets
// etc.

// Writing a Weighted Graph //
// We can make our graph weighted by just adding a comma and the weight

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    if (!vertex1 || !vertex2) return false;
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}
