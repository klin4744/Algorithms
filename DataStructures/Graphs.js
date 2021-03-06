/////////////
// Graphs //
////////////

// A graph consists of a finite set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or set of ordered pairs for a directed graph.

// A graph is simply a collection of nodes and connections between those nodes.

// Example
// https://www.sanfoundry.com/wp-content/uploads/2017/08/data-structure-questions-answers-graph-q5.png
// Simply a bunch of nodes and a bunch of connections between those nodes
// A tree is a type of a graph but graphs don't necessarily have parent nodes, every node is treated the same way, no special node.

// Uses for graphs
// Social networking - Graphs are used commonly for social networking to connect friends where nodes are people and there are several connections based on different criteria (same school, mutual friends, etc).
// Location/mapping - Google maps for example uses graphs where specific points are nodes and roads etc are connections. Google maps calculates the fastest path using graphs to get from one location to another. Note that google map also takes a ton of things into account such as traffic, speed limit, etc.
// Reccomendations - People also watched, you might also like, people you might know! All these reccomendations are made using graphs! Intersections of nodes can give us insight on what to reccomend.
// Visual hierarchy - graphs can be used to make visual representations of visual graphs! This is done by using connections.
// File system optimizations
// Everywhere!

// There are no patterns in graphs!

// Types of graphs
// Vertex - a node
// Edge- connection between nodes
// Weighted/unweighted - Unweighted graphs are graphs in which the edges do not have values. Weighted graphs have edges with assigned values that give some king of insight on the connection. For example, google maps would use a weighted graph because we would like to know the distance between two vertices (places).
// Undirected/directed - Undirected graphs are graphs that have no direction associated to its edges. We can go from A to E or E to A. This is often useful for things such as Facebook friends, a two way relationship. Directed graphs are graphs that have directions associated to its edges, the edges are represented by arrows. This means  B <- A -> C, a can go to B and C but both C and B cannot go to anything, they are dead ends. Note: directed graphs can also be bi-directional.

// Think about instagram, if you follow a celebrity you have access to their content but they will likely not follow you back and thus will not be able to see your content, this is a directed relationship.

// A tree is a graph that only has one path to go to a specific node.

// Representing a graph //

// 1.
// Adjacency matrix //
// A matrix is a 2d structure with rows and columns, we can represent connections of a graph as a matrix
// Example
//     A       B         C
// A   0       1         1
// B   1       0         1
// C   1       1         0

// Here we have a simple triangle structure where A is linked to B and C, C is linked to B and A, and B is linked to A and C. By linked we mean connected.

// 2.
// Adjacency list //
// For Adjacency lists, we simply just create an array which stores arrays that contain a vertex's connections
// For Example:
//    [
// 0    [1,5],
// 1    [0,2],
// 2    [1,3],
// 3    [2,4],
// 4    [3,5],
// 5    [4,0]
//    ]
// The node with the name 0 or corresponding to the 0 index, has edges connecting it to vertex 1 and vertex 5. etc.

// In the case our nodes are indexes, we can instead use a hash table, aka an object in javascript
// {
//    A: ["B","F"] ,
//    B: ["B","F"] ,
//    C: ["B","F"] ,
//    D: ["B","F"] ,
//    E: ["B","F"] ,
//    F: ["B","F"]
// }

// Adjacency List vs Matrix Big O
// Operation         List           Matrix
// Add Vertex        O(1)           O(V^2)
// Add Edge          O(1)           O(1)
// Remove Vertex     O(V+E)         O(V^2)
// Remove Edge       O(E)           O(1)
// Query             O(V+E)         O(1)
// Storage           O(V+E)         O(V^2)

// Adjacency lists take up less space (in sparce graphs) because they only include links
// Are faster to iterate over all edges because they only store the direct connects whereas matrices store empty links as well
// Lists are slower to lookup specific edges (query) because we'd have to iterate through all the items in an adjacency lists, For matrices all we'd have to do is directly access the slot of interest and see if its a 0 or a 1.

// We will create an adjacency list because they are more common the matrixes and because they are more efficient with storing data. This is very important in the real world because storage is a huge problem with bigger data and matrices also will add extra data that isn't connected which exponentially increasing the amount of data.

// Creating an adjacency list graph
// We will use the object notation and create and undirected graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // Adds a key to the list if the key does not already exist and sets its value to an empty array to store edges
  addVertex(vertex) {
    !this.adjacencyList[vertex]
      ? (this.adjacencyList[vertex] = [])
      : console.log("Already Exists");
  }
  // Adds an edge to an existing vertex. Function takes two vertexs and connects them. Essentially we form a connection by pushing the vertex into another vertex's arrays. The arrays of each vertex holds the vertices it is connected to.
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return true;
  }
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(edge => edge !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(edge => edge !== v1);
    return true;
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;
    const keys = Object.keys(this.adjacencyList);
    let target = {};
    for (let iteration in keys) {
      let key = keys[iteration];
      this.removeEdge(key, vertex);
      if (key !== vertex) {
        target[key] = this.adjacencyList[key];
      }
    }
    this.adjacencyList = target;
  }
}

// Graph traversal
// By graph traversal, we mean having the ability to visit every single vertex in a graph and, if we choose to edit visited vertices, append edges to them, or remove them.
// For trees, there is only one path to a vertex, for bigger graphs, there are several paths to the vertex of interest, we also do not know where to start in a general graph.
// We will need to specify some starting vertex in order to start traversing and set some kind of target then choose a path based on conditions we're given such as if the graph undirected/directed or if we're trying to optimize length, etc.
// There are a ton of applications for graph traversal that it is commonly tested.

// Depth first traversal //
// Depth first really just means moving away from the root. However, there are no roots in graphs, so we have to choose some starting vertex, find that vertex's neighbors before we visit its sibiling. This means we can go to a neigbor node but then continue to move away from the starting node, aka continue to visit the children of the neighbor node, or more appropriately, the neighbors of the neighbor of the starting node, we will then go back and go as deep as we can in the other direction. We must remember which vertices we already visited!

// DFS Pseudocode
// Create a function called DFSRecursive that takes a vertex, make a base case to end recursion if the vertex passed is empty, otherwise build a results list and, if a vertex was visited, set its value to true

// Note: Do not run this javaScript file without commenting out duplicate declarations, copy and paste them into a separate file or into chrome snippets.

// Line 179 will include code;

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // Adds a key to the list if the key does not already exist and sets its value to an empty array to store edges
  addVertex(vertex) {
    !this.adjacencyList[vertex]
      ? (this.adjacencyList[vertex] = [])
      : console.log("Already Exists");
  }
  // Adds an edge to an existing vertex. Function takes two vertexs and connects them. Essentially we form a connection by pushing the vertex into another vertex's arrays. The arrays of each vertex holds the vertices it is connected to.
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return true;
  }
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(edge => edge !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(edge => edge !== v1);
    return true;
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;
    const keys = Object.keys(this.adjacencyList);
    let target = {};
    for (let iteration in keys) {
      let key = keys[iteration];
      this.removeEdge(key, vertex);
      if (key !== vertex) {
        target[key] = this.adjacencyList[key];
      }
    }
    this.adjacencyList = target;
  }
  DFSRecursive(vertex) {
    // First create a results array which stores the vertices we visited
    const results = [];
    // We also created a visited object to use as a test if we have already visited a vertex
    const visited = {};
    // We will use a helper function so we must either bind the helper function to this in the constructor or set the adjacencyList equal to a variable, since this will not bind to it inside a helper.
    const list = this.adjacencyList;
    // Our helper function takes a vertex, pushes that vertext into our results array, and adds it to our visited object. We then loop through our adjacency list for that specific vertex and check it's edges (siblings), if the sibling is already in our list, we simply ignore it and move on, otherwise we recursively call the helper again on the sibling, our base case will stop recursion if the vertex does not exist. Nothing will be passed into helper in this case if the loop finishes.
    function helper(vertex) {
      if (!vertex) return;
      results.push(vertex);
      visited[vertex] = true;
      for (let i = 0; i < list[vertex].length; i++) {
        if (!visited[list[vertex][i]]) {
          helper(list[vertex][i]);
        }
      }
    }
    helper(vertex);
    return results;
  }
  // For this solution, we will use an array for a stack.
  DFSIterative(vertex) {
    // s is a stack we created LIFO, Last in first out;
    const s = [];
    // push s into our stack
    s.push(vertex);
    // Create a results array and a visited object to check if the item has been visited already
    const visited = {};
    const results = [];
    while (s.length > 0) {
      // nextVertex is the last item in our stack, following LIFO, we take the last item put into our stack, out of our stack
      let nextVertex = s.pop();
      if (!visited[nextVertex]) {
        // Store the vertex into results and label it as visited
        results.push(nextVertex);
        visited[nextVertex] = true;
        // Loop through the vertice's siblings and if they have not been visited, push them into the stack
        this.adjacencyList[nextVertex].forEach(sibling => {
          if (!visited[sibling]) s.push(sibling);
        });
        // The while loop will continue to run if anything goes into our stack, and this forEach will repopulate our stack as long as there is something that has not been visited
      }
      // Note, the order is not the same as the recursive solution because the stack grows after our first vertex is ran, that means the last sibling of each vertex is dealt with first.
    }
    return results;
  }
  // Breadth First Search prioritizes visiting neighbors at the current depth before moving on to the next levels. So if our source's edges are B and D, we'd want to visit B and D first, not their childrent immediately.
  BFS(vertex) {
    const visited = {};
    const results = [];
    // Queue First in First Out, FIFO, use push and shift!
    const queue = [];
    let next;
    visited[vertex] = true;
    queue.push(vertex);
    while (queue.length) {
      next = queue.shift();
      results.push(next);
      for (let i = 0; i < this.adjacencyList[next].length; i++) {
        if (!visited[this.adjacencyList[next][i]]) {
          visited[this.adjacencyList[next][i]] = true;
          queue.push(this.adjacencyList[next][i]);
        }
      }
    }
    return results;
  }
}
