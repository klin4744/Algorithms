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
  // Create a pop function that removes a node at the end of the singlyLinkedList. It should return the node removed
  pop() {
    // Check the edge case if empty list;
    if (this.length === 0) return;
    let removed = this.tail;
    // We have to traverse the list until we reach the node right before the tail, lets start at the head
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        // If the next property of the tail is not equal to the tail, just continue to move down the list
        current = current.next;
      }
      // Set the next property of the node right before the tail to null, severing its link to the tail, then set the tail pointer to the current node, decrement the length and return the removed node;
      current.next = null;
      this.tail = current;
    }
    this.length--;
    return removed;
  }
}
