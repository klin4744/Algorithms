///////////////////
// Binary Heaps //
//////////////////

// What is a Binary Heap?
// Very similar to a binary search tree, but with some different rules

// In a Max Binary Heap, parent nodes are always larger than child nodes.
// In a Min Binary Heap, parent nodes are always smaller than child nodes

// Each node can have atmost two child (binary), but left and right order does not matter, just has to follow the Max/Min Heap rules

// Max Binary Heap Rules //
// Each parent has at most two child nodes
// The value of each parent node is always greater than its child nodes
// In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
// A binary heap is as compact as possible. All the hcildren of each node are as full as they can be and left children are filled out first!
// Every left and right is filled before we move down

// Example of a Max Binary Heap
//            100
//         19     36
//       17  3   25  1
//      2  7
// NO implied order between siblings, siblings do not really have a relationship

// Why should you learn about heaps?
// Very common to use a binary heap to create a priority queue.
// Very commonly used to traverse graphs

// We can use an array or a list to store a binary heap instead of creating classes for it

// For example:
//                   100
//         19                  36
//      17    12            25    5
//    9  15  6  11        13  8  1  4

// As an array [100,19,36,17,12,25,5,9,15,6,11,13,8,1,4]
// In this case, the children of a parent element given the parent elements index, i, is Left = 2i+1 and and right = 2i+2

// We can also work backwards, if we have a child node and we want it's parent
// If the child is a left index = (leftIndex-1)/2
// If the child is a right index = (RightIndex -2)/2
// Make sure to Math.floor the value, indexing must be whole, the Flooring also removes the need to use the second formula.

// Inserting into our heap

// Defining our heap

const MaxBinaryHeap = [];

// Add to the end of the array, then bubble up the value to put it into the right spot.
// Comapre node to parent, if it is larger than its parent, bubble it up!

function insert(maxHeap, value) {
  let currentIndex = maxHeap.length;
  let parent = Math.floor((currentIndex - 1) / 2);
  maxHeap.push(value);
  while (maxHeap[currentIndex] > maxHeap[parent]) {
    let temp = maxHeap[parent];
    maxHeap[parent] = maxHeap[currentIndex];
    maxHeap[currentIndex] = temp;
    currentIndex = parent;
    parent = Math.floor((currentIndex - 1) / 2);
  }
  return maxHeap;
}

// Creating a class for binary heaps
class maxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    let maxHeap = this.values;
    let currentIndex = maxHeap.length;
    let parent = Math.floor((currentIndex - 1) / 2);
    maxHeap.push(value);
    while (maxHeap[currentIndex] > maxHeap[parent]) {
      let temp = maxHeap[parent];
      maxHeap[parent] = maxHeap[currentIndex];
      maxHeap[currentIndex] = temp;
      currentIndex = parent;
      parent = Math.floor((currentIndex - 1) / 2);
    }
    this.values = maxHeap;
    return this;
  }
  // ExtractMax - Removing from a heap
  // Removes the root
  // Replace with the most recently added
  // Adjust by sinking down

  // Sink down - the procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap) or the minumum element in a min-heap) and restoring the properties.

  // Example
  // [41,39,33,18,27,12]
  // Remove the root (41), and swap with the most recently added element
  // [12,39,33,18,27]
  // Bubble/sink down to the right poition, maximum number should be the new root! Compare 12 to it's children 39 and 33, check which one is larger and swap that one with 12 unless 12 isnt less than the largest child node
  // [39,12,33,18,27]
  // Now compare 12 with both of it's new children nodes and swap it with the larger node unless both nodes are smaller
  extractMax() {
    let values = this.values;
    // For time complexity reasons, I swap first then remove the old root node
    values[0] = values[values.length - 1];
    values.pop();
    // instatiate child nodes
    let child1, child2, indexToSwap;
    let currentIndex = 0;
    while (true) {
      child1 = currentIndex * 2 + 1;
      child2 = currentIndex * 2 + 2;
      if (!values[child1]) break;
      if (values[currentNode] >= Math.max(values[child1], values[child2])) {
        break;
      }
      indexToSwap = values[child1] > values[child2] ? child1 : child2;
      let oldNode = values[currentIndex];
      values[currentIndex] = values[indexToSwap];
      values[indexToSwap] = oldNode;
      currentIndex = indexToSwap;
    }
    return this;
  }
}
