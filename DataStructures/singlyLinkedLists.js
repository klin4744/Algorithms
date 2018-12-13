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
