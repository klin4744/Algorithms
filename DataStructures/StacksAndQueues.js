////////////////////////////
//// Stacks and Queues ////
//////////////////////////

// Stacks //
// What is a stack?
// A stack is a LIFO data structure. LIFO means that the last element added to the stack will be the first element removed from the stack. This is very similar to a call stack.

// How is it used?
// Think about a stack of plates, as you pile it up the last thing that you put on the stack gets removed first.

// Visualizing a stack

//    Last ---- size = 4 --First    //
// <-- 10 <-- 2 <--- 22 <--- 7      //
// If we remove something we take off the last.

// Where stacks are used?
// Managing function invocations
// Undo / Redo
// Routing (the history object) is treated like a stack!

// Creating a stack with an array
// Some programming languages have built-in stacks, javascript does not!

// Sample of an array stack
let stack = [];
stack.push("google"); // Add to the stack
stack.push("instagram");
stack.push("youtube");
stack.pop(); // Each time we remove

// Another way to do it
stack.unshift("create new file");
stack.unshift("resized file");
stack.unshift("cloned out wrinkle");
stack.shift();

// In either ways, the first thing in is the last thing out of the array, in this case due to how arrays work with indexing, push + pop combo is much more effiicent than shift and unshift!

// It is worth noting that if you want to be efficent, you will likely not used an array, rather you will use a linked list

// Singly linked list implementation

// First create node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// WIth singly linked list, you will want to actually use shift and unshift instead of push and pop
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.length;
  }
  pop() {
    let oldFirst = this.first;
    if (!this.first) return null;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      let newFirst = this.first.next;
      this.first.next = null;
      this.first = newFirst;
    }
    return oldFirst;
  }
  // Big O of Stacks
  // Insertion - O(1)
  // Removal - O(1)
  // Since we add and remove from the begining of our list, insertion and removal become O(1)
  // Searching - O(N)
  // Access - O(N)

  //Stacks are a LIFO data structure
  //Used for function invocations (the call stack), for operations like undo/redo, routing, and much more!
  // More complicated algorithms are really easy to solve with array stacks
}

/////////////
// Queues //
////////////

// What is a queue?
// Similar to a stack in that it only has two functions: adding and removing.
// A queue follows the FIFO principle: first in first out
// The first thing added to a queue comes off first
// Think of a line: the first person waiting on a line gets in first.
// How do queues relate to programming?
// Background tasks
// Uploading resources, first thing you start to upload tends to upload first
// Printing at a library or school, the first person that sends a print request will have their paper printed first

// Building a queue with an array //

let queue = [];

// To add items to the queue, we can either use push or unshift

queue.push(1);
queue.push(2);
queue.push(3);
// 1,2,3

// We want to remove 1 first as it was added to our queue first, so we need to use shift here instead of pop, if we used unshift to append to our array, we would instead use pop!

queue.shift();
queue.shift();
queue.shift();

// If we had a large array, we would have to reindex the entire array when we call shift

// The other way
queue.unshift(1);
queue.unshift(2);

// Removal
queue.pop();
queue.pop();

// In this case, if we insert to a large queue, we have to reindex or reassign each item in the array to a new index.

// Notice that either method is not great for time complexity!

// Creating a queue data structure from scatch //
// Note: the node used is the same as the node made for the stack class;
// The queue will follow a linked list setup with a different setup.

// Again we have two ways to do this, add to the beginning, then remove from the end or add to the end, then remove from the begining!

// We will instead add to the end and remove from the begining because we do not want our queue to go all the way to the end of the list to remove

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // Enqueue adds to the end of our queue
  enqueue(val) {
    let newNode = newNode(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // Set the next property of our current last node to the new node
      this.last.next = newNode;
      // Set the last pointer to the newNode
      this.last = newNode;
    }
    // Increment the length
    return ++this.length;
  }
  // Dequeue removes from the end of our queue and returns the removed item
  dequeue() {
    let oldNode = this.head;
    if (this.length === 0) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = oldNode.next;
    oldNode.next = null;
    this.length--;
    return oldNode.val;
  }
}

// Code is nearly identical to the code for stack!

// Big O
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)
