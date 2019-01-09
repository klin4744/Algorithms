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
/////////////////////////////////////////
// class WeightedGraph {
//   constructor() {
//     this.adjacencyList = {};
//   }
//   addVertex(vertex) {
//     if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//   }
//   addEdge(vertex1, vertex2, weight) {
//     if (!vertex1 || !vertex2) return false;
//     this.adjacencyList[vertex1].push({ node: vertex2, weight });
//     this.adjacencyList[vertex2].push({ node: vertex1, weight });
//   }
// }
/////////////////////////////////////////////////
// Basics of Dijkstra's
// Every time we look to visit a new node, we pick the node with the smallet known distance to visit first.
// Once we've moved to the node we're going to visit, we look at each of its neighbors
// For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
// If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

// We intiialize with a list of all the vertices and the shortest distance from our current node. Say we start from node A, we would have a list like this:

// Vertex  // Shortest Dist From A
// A       //        0
// B       //       Inf
// C       //       Inf
// D       //       Inf
// E       //       Inf
// F       //       Inf

// At Node A, we know the distance to itself is 0, we are not sure about any other distances so we set them to infinity
// Pick the smallest known distance in the list and add it to the visited list, then look at each of its neighbors
// First neighbor of A is B, and it's current shortest distance to A is Infinity. Compared to the edge distance 4, 4 is smaller so we update infinity to 4. Now on the previous list we update B's value to A.
// Now move to the next neighbor of A, C and do the same for its distance and update it's value in previous to A as well.

// Vertex  // Shortest Dist From A
// A       //        0
// B       //       Inf => 4
// C       //       Inf => 2
// D       //       Inf
// E       //       Inf
// F       //       Inf

// Previous : {
//   A: null,
//   B: A,
//   C: A,
//   D: null,
//   E: null,
//   F: null
// }
// Visited = [A]
// Now pick the next node with the shortest distance to A that is not in our visited array, in this case C. and push it into our visited array
// Now we will look at C's neighbors and calculate the new distance between A to D through C which has a connection to both nodes. We do this via summing A to C and C to D. Then we update D's shortest distance to A. Now we update previous for D to C since we used C to get to D. Now we look at C's second child and do the same thing,
// Vertex  // Shortest Dist From A
// A       //        0
// B       //       Inf => 4
// C       //       Inf => 2
// D       //       Inf => 4
// E       //       Inf
// F       //       Inf => 6

// Previous : {
//   A: null,
//   B: A,
//   C: A,
//   D: C,
//   E: null,
//   F: C
// }
// Visited = [A,C]
// Again pick the shortest distance not in visited, we have B and D left, we can choose either, but we will visit B first.
// Do the same thing again
// Vertex  // Shortest Dist From A
// A       //        0
// B       //       Inf => 4
// C       //       Inf => 2
// D       //       Inf => 4
// E       //       Inf => 7
// F       //       Inf => 6

// Previous : {
//   A: null,
//   B: A,
//   C: A,
//   D: C,
//   E: B,
//   F: C
// }
// Visited = [A,C,B]
// Now move onto the next unvisited node, the next smallest is D.
// Do the same thing again
// Vertex  // Shortest Dist From A
// A       //        0
// B       //       Inf => 4
// C       //       Inf => 2
// D       //       Inf => 4
// E       //       Inf => 7
// F       //       6 => 5

// Previous : {
//   A: null,
//   B: A,
//   C: A,
//   D: C,
//   E: B,
//   F: C => D
// }
// Visited = [A,C,B,D]
// We update F since new distance from A through D is shorter, we dont update 7 because 7 is equal to 7 already,

// And lastly F
// Vertex  // Shortest Dist From A
// A       //        0
// B       //       Inf => 4
// C       //       Inf => 2
// D       //       Inf => 4
// E       //       7 => 6
// F       //       6 => 5

// Previous : {
//   A: null,
//   B: A,
//   C: A,
//   D: C,
//   E: B => F,
//   F: D
// }
// Visited = [A,C,B,D,F]
// Now we visited every node not E, so our shortest path is through F, We also know our exact path is
// A => C = D = F => E from our previous structure

// Psuedo code for the Algorithm, remember that we need to use a priority queue, we can do this by looking at the edge distances. We will create the priority queue below:

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let node = new Node(value, priority);
    let currentIndex = this.values.length;
    let parent = Math.floor((currentIndex - 1) / 2);
    this.values.push(node);
    if (this.values[parent]) {
      while (
        this.values[currentIndex].priority < this.values[parent].priority
      ) {
        let temp = this.values[parent];
        this.values[parent] = this.values[currentIndex];
        this.values[currentIndex] = temp;
        currentIndex = parent;
        parent = Math.floor((currentIndex - 1) / 2);
        if (currentIndex === 0) break;
      }
    }
    return this;
  }
  dequeue() {
    let values = this.values;
    if (values.length === 0) return;
    let max = values[0];
    values[0] = values[values.length - 1];
    values.pop();
    let child1, child2, indexToSwap;
    let currentIndex = 0;
    while (true) {
      child1 = currentIndex * 2 + 1;
      child2 = currentIndex * 2 + 2;
      if (!values[child1]) break;
      if (values[child2]) {
        if (
          values[currentIndex].priority <=
          Math.min(values[child1].priority, values[child2].priority)
        ) {
          break;
        }
        indexToSwap =
          values[child1].priority < values[child2].priority ? child1 : child2;
      } else {
        indexToSwap =
          values[currentIndex].priority < values[child1].priority
            ? false
            : child1;
      }
      if (!values[indexToSwap]) break;
      let oldNode = values[currentIndex];
      values[currentIndex] = values[indexToSwap];
      values[indexToSwap] = oldNode;
      currentIndex = indexToSwap;
    }
    this.values = values;
    return max;
  }
}
// Sorting here is O(N*log(N)), better to use a Binary Heap for time efficiency.
// - Create a function that accepts a starting and an ending vertex
// - Create an object called distances and set each key to be every vertex in the adjacency list with value of infinity, except for the starting vertex which should have a value of 0
// - After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
// - Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
// - Start looping as long as there is anything in the priority queue
//   -Dequeue a vertex from the priority queue
//   - If that vertex is the same length as the ending vertex, we are done
//   -Otherwise loop through each value in the adjacency list at that vertex
//     - Calculate the distance to that vertex from the starting vertex
//     - If the distance is less than what is currently stored in our distances obj:
//       - update the distances object with new lower distance
//       - update the previous object to contain that vertex
//       - enqueue the vertex with the total distance from the start node

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
  // Returns the array in order
  Dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const path = [];
    const priorityQueue = new PriorityQueue();
    // Build initial state
    const keys = Object.keys(this.adjacencyList);
    let current;
    keys.forEach(vertex => {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    });
    // As long as there is something to visit..
    while (priorityQueue.values.length) {
      current = priorityQueue.dequeue().val;
      if (current === end) {
        //
        while (previous[current]) {
          path.push(current);
          current = previous[current];
        }
        break;
      }
      if (current || distances[current] !== Infinity) {
        for (let neighbor in this.adjacencyList[current]) {
          let neighborNode = this.adjacencyList[current][neighbor];
          // Calc new distance
          // Add the distance from the current node to the weight of the neighbor node
          let distance = distances[current] + neighborNode.weight;
          if (distance < distances[neighborNode.node]) {
            distances[neighborNode.node] = distance;
            previous[neighborNode.node] = current;
            priorityQueue.enqueue(neighborNode.node, distance);
          }
        }
      }
    }
    return path.concat(current).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
