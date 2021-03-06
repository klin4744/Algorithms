//////////////////////
// Priority Queues //
/////////////////////

// What is a priority queue?

// A data structures where each elemenet has a priority associated with it. Elements with higher priorities are served before elements with lower priorities.

// Used anytime you need to assign an order to things added to a queue.

// Priority queues are separate from heaps, they can be created with arrays and lists, but doing so will make a very slow priortity queue.

// For example : Using a list
// priority:3, priority:1, priority:2, priority:5, priority:4

// Example of a priority queue using a heap
//  queue - Low Fever
// Someone with a more severe symptom comes in
//           Concussion
//       Low Fever    Drunk
// Fatal injury, gets bubbled up to the top of the heap
//            Exploded Head
//         Concussion   Drunk
//         Low Fever
// Remember for heaps, the root gets removed first, last in last out
// Top level element (min or max) is always removed first.
// For lists and arrays, doing a priority queue would be O(N) time complexity, but with a heap it is much faster.

// Priority Queue Pseduocode
// Create a class called Priority Queue and give it a list of values, but also create a node class which has a value and an associated priority, remember lower priority value usually means higher priority! We can play around with these but just need to keep numbers consistent! The value can be anything but we use the node value to do comparisons. If we remove, we need to sink down, add need to bubble up. It will likely be easier to model this with a min Binary Heap!

class Node {
  constructor(value, priority) {
    this.val = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  Enqueue(value, priority) {
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
  Dequeue() {
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

// Big O of Binary Heaps
// Time complexity for insertion and removal is O(log(n))
// Searching - O(n);
// Again much more effective at inserting nodes or values as compared to arrays
// It is log n because each time we double the amount of nodes aka add a new level to the tree, we only need to add one additional comparison or iteration.
// For regular binary trees, we could have had a tree that was a singly linked list represented as a tree, for heaps this is not the case. All the leaves of the heap must be filled before moving down a level.
// Binary heaps are not really made to be searchable, that is why O(n) is not great. We can't make a decision since sibling nodes don't have any relationship. We don't really know where to check so we may have to check every single node, usually we will only have to check half of the nodes but there is no guarantee.
