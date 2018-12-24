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
  if (maxHeap.length < 3) {
    maxHeap.push(value);
  } else {
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
  }
  return maxHeap;
}
