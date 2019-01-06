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
