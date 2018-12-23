// Tree Traveseral //

/////////////////////////////
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Our binary search tree only needs to keep track of the root!

/////////////////////////////
// Tree traversal is, given any tree, the ability to visit every single node in the tree atleast one time

// This can be very difficult because trees are uni-directional, parent -> children.

// This also helps us do searching for any tree structure (unordered trees included)

// Two main ways to traverse a tree

// Breadth-first Search -> working across the tree, one row at a time

// Depth-first Search -> working down the tree, one column at a time
// In-order
// Pre-order
// Post-order

///////////////////////////
// Breadth-first Search //
//////////////////////////

// Visiting all nodes in a the same level, one row at a time (look at sibling nodes then continue to move down)

// How will we approach BFS?
// Use a queue (can be an array) and a variable to store the values of nodes visited
// Place the root node in the queue
// Loop as long as there is anything in the queue
// Dequque a node from the queue and push the value of the node into the variable that stores the ndoes
// If there is a left property on the node dequeued - add it to the queue.
// If there is a right property on the node dequeued- add it to the queue.
// Return the variable that stores the values

// Example

//           10
//          6    15
//        3  8     20
// queue: []
// visited: []
// while something is in our queue, we want to take it from the queue, add it to our visited list, then check if it has a left, if it does add it to the list. Then check if that node has a right, if it does, also add it to the queue. the first thing is again removed from the queue now, promopting it's left and right to be checked and added to the end of the queue.

// First iteration
//           10   <---
//          6    15
//        3  8     20
// queue: [10]
// visited: []
// 10 is added to the queue, our root node

// 10 is now popped off the queue and added to visited,

//           10   <---
//          6    15
//        3  8     20
// queue: []
// visited: [10]
// if something is pushed into our visited list, check if it has a left and a right prop. if it has either, push those into the queue
//           10   <---
//          6    15
//        3  8     20
// queue: [6,15]
// visited: [10]

// Rememeber queue follows FIFO, so here we pop 6 off first and repeat our steps if something is added to visited

// queue: [15,3,8]
// visited: [10,6]

// queue: [3,8,20]
// visited: [10,6,15]

// queue: []
// visited: [10,6,15,3,8,20]

// attemp
// Go to line 133
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let previous = this.root;
      while (previous) {
        if ((value = previous.value)) return;
        if (newNode.value < previous.value) {
          if (!previous.left) {
            previous.left = newNode;
            break;
          } else {
            previous = previous.left;
          }
        } else {
          if (!previous.right) {
            previous.right = newNode;
            break;
          } else {
            previous = previous.right;
          }
        }
      }
    }
    return this;
  }
  find(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return true, node;
      } else if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      }
    }
    return false;
  }
  BFS() {
    let data = [],
      queue = [],
      node = this.root;
    // first push the root into the queue
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
  ////////////////////////
  // Depth First Search //
  ///////////////////////

  // Visit vertical nodes before visiting any sibling nodes

  // PreOrder DFS //
  // Visit the root first, then traverse the left and move towards the right
  // Example
  //               10
  //            6      15
  //          3   8       20
  // first, 10, then move down to 6, then down to 3 (the leftmost column), then collect the node at 8
  // finally do right side, [15,20]
  // [10,6,3,8,15,20]
  DFSPreOrder() {
    let visited = [],
      current = this.root;
    function helper(node) {
      visited.push(node.value);
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
      return visited;
    }
    return helper(current);
  }
  // Post order DFS
  // Start at 10, go to the bottom left most node first, add the left most node, then add the right node on the left end, then move up the list, do the right side, then finally post the root node.
  // Example
  //               10
  //            6      15
  //          3   8       20
  // The root goes in last, bottom first
  // [3,8,6,10,20,15]
  DFSPostOrder() {
    let visited = [],
      current = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      visited.push(node.value);
    }
    traverse(current);
    return visited;
  }
}
