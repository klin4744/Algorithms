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
  // Shift, removes a node from the beginning of the list
  shift() {
    if (this.length === 0) return;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next.prev = null;
    }
    oldHead.next = null;
    this.length--;
    return oldHead;
  }
  // Unshift adds a node to the begining of the list
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Get accesses a node in a list by its position
  get(index) {
    // Check edge cases first
    if (index < 0 || index >= this.length) return;
    // We will check if our index is greater than half of our length, if it is, this means it is faster to start from the end of our list. If not, it means it is faster to start from the begining
    let half = this.length / 2;
    // Initialize a current variable which will store node iterations
    let current;
    if (index > half) {
      // Since index is greater than our halfway point, we should start at the tail since our node of interest is closer to the end
      current = this.tail;
      // Decrement and set current to the prev value
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    } else {
      // Otherwise if index is less than or equal to our halfway point, we can simply start at the head and set current to current.next
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    }
    // Return the node asked for
    return current;
  }
  // Set takes an index and a piece of data to update a node at an index with the passed in piece of data
  set(index, value) {
    let nodeToChange = this.get(index);
    if (!nodeToChange) return false;
    nodeToChange.val = value;
    return true;
  }
  // Insert, adds a node to our list given an index
  insert(index, value) {
    if (index === 0) return !!this.unshift(value);
    if (index === this.length - 1) return !!this.push(value);

    let prevNode = this.get(index - 1);
    if (!prevNode) return false;
    let newNode = new Node(value);
    let nextNode = prevNode.next;
    // Set the previous property of the node after the previous node equal to our new node.
    newNode.next = nextNode;
    nextNode.prev = newNode;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  // Remove takes an index in a doubly linked list and removes that item from the list
  remove(index) {
    // First take care of edge cases
    if (index === 0) return !!this.unshift();
    if (index === this.length - 1) return !!this.pop();
    // Grab the node we want to remove
    let nodeToRemove = this.get(index);
    // If we don't get anything, return false
    if (!nodeToRemove) return false;
    // Find the node before the node we want to remove
    let nodeBefore = nodeToRemove.prev;
    // Find the node after the node we want to remove
    let nodeAfter = nodeToRemove.next;
    // Link the before and after nodes to each other
    nodeBefore.next = nodeAfter;
    nodeAfter.prev = nodeBefore;

    // We have to dettach the node from the list by removing its next and prev values;
    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    return true, nodeToRemove;
  }
}
