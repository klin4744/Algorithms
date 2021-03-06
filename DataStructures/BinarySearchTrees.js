////////////////////////////
// Introduction to trees //
//////////////////////////

// What are trees?
// Trees are data structures that consists of nodes in a parent/child relationship.
// This gives us a branching structure, think a family tree.
// Example of a tree - Each circle represents a node

//                2    root or top most node
//  9      12      8         99           10
// 2     1 7 2             44 11         55 87

// The number of things linked to our root node can be randomized, as long as we have a root node and branching nodes

// Lists - linear
// Trees - nonlinear, existance of branching and several different pathways

// A singly linked list can be considered a tree, but isn't really practical.

// Rules
// Nodes can ONLY point to child nodes, they cannot point to sibling nodes! Every node has to point unidirectionally downward, away from the parent node
// Every tree has ONE root

// Terminolgy
// Root- The top node in a tree
// Child - A node directly connected to anoter node when moving away from the root
// Parent - The converse notion of a child
// Siblings - A group of nodes with the same parent
// Leaf - A node with no children
// Edge - The connection between one node to another (the arrow)

// Uses for trees
// HTML DOM - Elements in the DOM can have several nested HTML elements, this is a tree structure. The body is the root and the content is the children which also has their own children.
// Network Routing
// Abstract syntax tree
// Artificial intelligence - create tree of possible outcomes and responses to those outcomes (decision tree)
// Folders in operating systems - file manager is a tree system
// JSON parse creates a tree sturcture

//////////////////
// Binary trees //
/////////////////

// A binary tree has a special condition, each node can have at most two child nodes. It cannot have more than two child nodes!

// Binary Search Trees //
// Special binary trees that are sorted in a specific way
// Stores data that can be compared, can be strings, etc. Must be able to compare

// How are Binary Search Tress sorted?
// All items in a node that is less than a parent node, is stored as a node on the left side of the parent node.
// All items less than the parent item, is stored as a node on the right side of the parent node.

// Example
//          10
//     6         15
//   3   8           20

// 6 is less than it's parent node 10, so it goes to the left of 10, 15 on the otherhand is greater than it's parent node 10, so it goes on the right end.
// Moving down to the node 6 , we see two child nodes. 3 is less than 6, so it is stored to the left, 8 is greater and thus is stored to the right.

// General rules
// Every parent node has at most two children
// Every node to the left of a parent node is always less than the parent
// Every node to the right of a parent node is always greater than the parent

// Why are Binary Search Trees used?
// Binary search trees can find data REALLY quickly.
// Similar to binary search, we make comparisons when we search for data, each search results in one comparison which cuts the amount of data we have to traverse in half

// Example
//          10
//     6         15
//   3   8           20

// Say we wanted to look for 20
// First comparison starts at the parent node, well 10 < 20, so we know to check only the right side
// 15 again is < 20, so go to the right again, we only had to do two comparisons versus six!

// Creating A Binary Search Tree

// First make a node, remember each node can have two children, we set these as left and right. Left and right are convienent names because they allow us immediately define greater or less than terms
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Our binary search tree only needs to keep track of the root!
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Insert places a new node into our binary search treee
  insert(value) {
    // Create a new node with the value passed
    let newNode = new Node(value);
    // Check edge case (if tree is empty)
    if (!this.root) {
      this.root = newNode;
    } else {
      // If edge case is not true, first set a current value, we always start with the node
      let previous = this.root;
      // We can set any statement here to loop that is true, I used while previous is true which is always true, we will break out of looping with the break keyword
      while (previous) {
        // If the value of the new node is less than the current node, then we either traverse down the left of the list, or we set the .left of the node to the new node. We do the second case if and only if the .left property is null. We cannot trasverse directly until we hit null because then we will end up just setting null to the node instead of appending to the list
        if ((value = previous.value)) return;
        if (newNode.value < previous.value) {
          if (!previous.left) {
            previous.left = newNode;
            break;
          } else {
            previous = previous.left;
          }
        } else {
          // Likewise for the explanation above, this is the same
          if (!previous.right) {
            previous.right = newNode;
            break;
          } else {
            previous = previous.right;
          }
        }
      }
    }
    // Finally return the binary search tree
    return this;
  }
  // Find searches to see if a value is within the Binary Search Tree
  find(value) {
    // Istantiate a variable that marks our current location as we traverse the list, we always start at the loop
    let current = this.root;
    // Since current tracks our location, it will hit null when it finishes traversing the tree because a node's left/right property at the end will be equal to null
    while (current) {
      // We will exit the loop and return true if the value is found, otherwise we move down either the right or left of the tree based on whether the value is greater or less
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
}

// Big O of BSTs

// Insertion - O(log n)
// Searching - O(log n)

// If we double the number of nodes, we only need to take one extra step
// This is REALLY good for searching and insertion
// This is possible because we essentially split the maximum numbers we have to look at by 2 every iteration!

// O(log n) however isnt ALWAYS guaranteed, you can have a tree that is basically a linked list where every node is greater than its parent, or less than its parent. This makes the complexity O(n) since the tree is basically a sinlgy linked list!
// This is avoidable by choosing a different node instead of the extrema
