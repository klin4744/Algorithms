class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Create a push functions that should take in a value and add a node to the end of the Singly Linked List. It should return the Singly Linked List
  push(val) {
    // first create a new node with the value
    let newNode = new Node(val);
    // Now check if the list has anything, if it doesnt just set the head and tail to the node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, first set the next property of the current tail to the new node
      this.tail.next = newNode;
      // now make the tail the newNode
      this.tail = newNode;
    }
    // Increment the length and return the list
    this.length++;
    return this;
  }
}
