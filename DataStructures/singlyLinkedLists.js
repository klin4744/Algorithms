//////////////////////////
// Singly Linked Lists //
/////////////////////////

// Introduction //

// What is a linked list?
// An ordered list of data that contains a head, tail, and length property
// Linked lists consist of nodes, and each node has a value and a pointer to another node or null
// They are different from arrays which are based on numbers

// Think of train cars, one item is connected to another, each element is called a node which stores a piece of data and has a reference to the next node.

// We only keep track of 2 items, the head and the tail
// NOTE: WE DO NOT HAVE INDEXES
// If you want to access a specific item you must start at the head and look for it from the head!

// Example //
// Head --------------Tail  // Length = 4
//   4  =>  6  => 8 => 2 => null

// If you want to access 8 for example, you must start at 4 then move to 6 and finally to 8.

// A singly linked list can only move in one direction, it only can move to the NEXT item, not backwards.

// The benefit of having a singly linked list over an array is that if we add an element to the begining of an array, we have to reassign all the array elements a new index. For a singly linked list, all we have to do is put the element in the front of the list and set its poitner to the old head.

// Comparisons with Arrays
// Lists
// Do not have indexes!
// Connected via nodes with a next pointer
// Random access is not allowed => you cannot find the element at a certain index immediately, must go from start to the actual node
// Biggest benefit is insertion and deletion

// Arrays
// Indexed in order!
// Insertion and deletion can be expensive
// Can quickly be accessed at a specific index

// Creating our singly-linked list

// Creating our Node
// Piece of data - val
// Reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// One way to add elements to our list
let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");

// Defining the linked list class
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      // Sets the current tail's next pointer to the new node
      this.tail = newNode;
      // Moves the tail pointer to the new node
    }
    this.length++;
    return this;
  }
  pop() {
    // Removes an item from the end of the linked list
    // We do not have a backwards pointer, so we cant just take off the last item, we'd have to start from the first item and move to the second to last item, and make that item our tail
    if (!this.head) return;
    let prev = null;
    let current = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // Shifting, remove a new node from the begining of the Linked List
  shift() {
    if (!this.head) return;
    let prev = this.head;
    let newHead = prev.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return prev;
  }
  // Unshifting, adds a new node to the beginning of the Linked list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Get, retrieves a node by it's position in the linked list!
  get(index) {
    if (this.length <= index || index < 0) return;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}
let list = new SinglyLinkedList();
