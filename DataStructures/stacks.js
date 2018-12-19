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
}
