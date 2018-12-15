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
  // Set, accepts a positon (index) and a value and will update that positon with the pushed value
  set(index, value) {
    // We can also, for readablity, set this.get(index) to a variable, remember get will not create a new value, it gives us a REFERENCE to the node! Any edits made to the node will edit our list!
    if (this.get(index)) {
      this.get(index).val = value;
      return true;
    } else {
      return false;
    }
  }
  // Insert, adds a node to the linked list at a specified posiiton
  insert(index, value) {
    if (index === 0) {
      this.unshift(value); // you can condense this with return !!this.unshift(value), since this.unshift runs ! is false, !! is true
      return true;
    } else if (index === this.length) {
      this.push(value);
      return true;
    } else if (index < 0 || index > this.length) {
      return false;
    } else {
      // Find the node right before where we want to insert
      let previousNode = this.get(index - 1);
      // Also find the node AT where we want to insert
      let findNode = this.get(index); // We can also set this to previousNode.next
      // Create the new node
      let newNode = new Node(value);
      // Set the next property of our previous node to our new node
      previousNode.next = newNode;
      // Finally set the next property of our new node to our previous item at the insert index
      newNode.next = findNode;
      // Since we added an item, increment the length
      this.length++;
      return true;
    }
  }
  // Remove, removes a node from the linked list at a specific position
  remove(index) {
    if (index === 0) return !!this.shift();
    if (index === this.length) return !!this.pop();
    if (index < 0 || index > this.length) return false;
    // Find the node right before where we want to insert
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    // Find the node right after where we want to remove
    let nextNode = this.get(index + 1); // We can also set this to previousNode.next
    previousNode.next = nextNode;
    // remove from the length
    this.length--;
    return removed;
  }
  // Reverse, reverses the linked list in place. Very common challenge. You cannot make a copy of the list, you must traverse and reverse
  // Start at the begining, set the head to the tail, then set the next variables next value to the head, then continue down
  // Example : 13 => 27 => 32
  // Set 13 to tail and 32 to head
  // We have to define a current node, we call this node and start it at the head
  // we define a next and a previous, previous must be initialized to null
  // In our loop, we loop through the length of the singly linked list
  // First, we set the next to node.next, in our first iteration, we start at our oldHead (13) which has the next property pointing to node 27, so our next variable points to 27
  // Now we set the .next node equal to previous, since we are starting at our 13 node, we conviently are able to set 13's next (our old head and now new tail), to null, so it isnt pointing at anything
  // Finally we want to shift one unit to the right, we first set the previous variable to the node we are currently on, then set the node to next
  reverse() {
    // First swap the head and the tail, Since we don't want to lose either value, make sure to save them to variables
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null; // Need to make sure the tail is null, so we set prev to a value here
    // Start our loop
    for (let i = 0; i < this.length; i++) {
      next = node.next; // Set node to the next value of what we are currently looking at
      node.next = prev; // Set the .next value of our node to our previous value
      // Now shift everything to the right
      // Set the previous value to the node we were looking at
      prev = node;
      // Set the current to the next value
      node = next;
    }
    return this;
  }
}
let list = new SinglyLinkedList();

// Big O of Singly Linked Lists
// Insertion - O(1) complexity  -> for arrays, the average is O(N)
// Removal - Can be O(1) or O(N) -> if we remove from begining, it's O(1), If we remove from end, we have to traverse the entire list (O(N)).
// Searching - O(N) -> Worst case is O(N) where the item is at the end
// Access - O(N) -> Getting a certain node out is the same as searching condiitons, Arrays in comparison can access in constant time O(1) after they have already been indexed

// Singly linked list win in insertion and deletion over arrays
