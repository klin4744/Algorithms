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
