/////////////////////////
// Doubly Linked Lists //
/////////////////////////

// Like a singly linked list but has a pointer to the object before it as well

// Almost identical to singly linked list, except every node has two pointers: next and prev.

// Comparisons with Singly Linked Lists //
// More memory, but more flexibility
// Always a tradeoff

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Adding a node to the end of the doubly linked list
  push(val) {
    // Store the new node to a variable for easy readability
    let newNode = new Node(val);
    // Store the current tail to a variable for easy readability
    let prevTail = this.tail;
    // First take care of the case where there are no items in the list
    if (this.length === 0) {
      // If nothing in our list, set the head and tail to the newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, first set our previous last item's next reference to be our new node
      prevTail.next = newNode;
      // Now set the previous property of our new node to be our previous tail
      newNode.prev = prevTail;
      // Finally move the tail property so be the newNode
      this.tail = newNode;
    }
    // Increment to the length and return our list
    this.length++;
    return this;
  }
  // Removes the last node from the list
  pop() {
    // If there is nothing to the list, return nothing. This stops us from going to negative lengths
    if (this.length === 0) return;
    // Otherwise grab the second to last item by accessing the previous value of the tail
    let oldTail = this.tail;
    let secondToLast = this.tail.prev;
    // If the length is 1, we do not have a prev property for the tail, we we instead just set everything to nothing
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Set the next property of the second to last item to null, removing its link to the last node.
      secondToLast.next = null;
      // Set the tail to be the second to last item;
      this.tail = secondToLast;
    }
    // The oldTail will still have a previous reference since we have yet to remove it, so we must set its previous reference to null or it'll still be linked to our list
    oldTail.prev = null;
    // Decrement length and return the popped item
    this.length--;
    return oldTail;
  }
}
