//////////////////
// Hash Tables //
/////////////////

// What is a hash table?
// Hash tables are used to store key-value pairs. They are like arrays, but the keys are not ordered. Hash tables, unlike arrays, are very fast for finding values, adding new values, and removing values!

// Most languages including JavaScipt has a built in Hash Table, we will make our own implementation of this but in general will use the built in hash table.

// Why use hash tables?
// Hash tables are increibly great for time complexity so hash tables are used often

// Implementation of hash tables
// Python - Dictionaries
// JS - Objects and Maps
// Java, Go, & Scala have Maps
// Ruby has Hashes

// How would we write our own version of a hash table?

// Imagine we want to store some colors
// We could just use an array/list:
// ["#ff69b4","#ff4500","##00ffff"]
// The top structure is not that great because we do not know specifically what colors we are accessing. Perhaps instead we want to attach keys to the color so we know exactly what colors we're assigning:

// pink -> #ff69b4 ;
// orangered -> # ff4500;
// cyan -> #00ffff;

// colors["cyan"] is better than using colors[2]
// Note: in javascript this is already built in so we could access it in this way, but for the sake of understand we will rebuild it

// The Hash Part
// To implement a hash table, we will be using an array, again we are rebuilding something that already exists; this is not absolutely necesary to do.

// In order to look up values by key, we need a way to convert keys into valid array indices aka convert "pink" to a index. Functions that do this are called hash functions.

// Hashing conceptually
//    0    1     2     3     4     5     6     7     8
// ["pink", "#ff69b4"]
// pink -> 0   the hash functions converts the string pink to index 0 then sets the 0 index element
// Now if we want to access the index of cyan for example, we can once again use the hash function to figure out the index, then access the array.

////////////////////
// Hash Functions //
////////////////////

// In order to look up values by key, we need a way to convert keys into valid array indices.
// A function that performs this task is called a hash function

// Hash functions are used in cyrptography, authentication, hash tables, etc.
// Hash functions CANNOT work backwards, they are generally one way functions.

// What makes a good hash?
// Bar a cryptographically secure hash function we need:
// 1. Fast (i.e. constant time)
// 2. Doesn't cluster outputs at specific indices, but distributes uniformly
// 3. Deterministic (same input yields same output, not multiple answers for one given input)

// An example of a good hash function (small scale):

// Write a function hash that has two arguments, a string and an array length. The array length tells if we can return a realistic index in the array for storage.

// For our strings, we can classify each string with their char code using the function charCodeAt, we can then convert each character to their numeric rank by subtracting 96. We can add all these char codes together to classify the entire string

// To keep our output index in bounds, we can use the modulo operator (%). We can do total % arrLength/
function hash(key, arrayLen) {
  let total = 0;
  for (i = 0; i < key.length; i++) {
    total = (total + key.charCodeAt(i) - 96) % arrayLen;
  }
  return total;
}

// Time complexity for this function is O(n) and is deterministic as in it always returns the same output if we pass in the same input, it also is always in bounds because of our modulo.

// Problems with this hash implementation
// Only hashes strings (we won't worry about this)
// Not constant time, is O(n) or linear
// Could be a little more random, our data can really get clustered easily aka multiple strings can return the same index, we want to make out data a bit more scattered.

// Lets make this hash better:
function hash(key, arrayLen) {
  let total = 0;
  let primeNumber = 31;
  for (i = 0; i < Math.min(key.length, 100); i++) {
    total = (total * primeNumber + key.charCodeAt(i) - 96) % arrayLen;
  }
  return total;
}

// The Math min reduces our loop times. We will only loop 100 times at most. This saves speed and is fine for most data sets, if all data sets start with the same 100 first values, we might consider increasing the limit or iterating from the end

// Hash functions like to take advantage of prime numbers, they help avoid colisions. Prime numbers also are great from array lengths to avoid collisions.
// Changing a number to a prime number reduces hash collisions tremendously, especially for larger arrays

// This solution deals with collisons better but doesn't remove collisions entirely, how do we handle collisions?

// 1. Separate Chaining
// With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).

// This allows us to store multiple key-value pairs at the same index.

// For example,
// darkblue ---- hash ----> 2
// salmon   ---- hash ----> 2
//                            2
//      [["darkblue","#00008b"],["salmon","#fa9072"]]
// If we want the value for salmon now, we type salmon into our hash function, it gives us index 2. We then go to our array and look at index 2 then loop it until we find salmon.

// 2. Linear Probing
// With linear probing, when we find a collison, we search through the array to find the next empty slot.

// For example
//  darkblue ---- hash ----> 2
// salmon   ---- hash ----> 2
//         2                          3
//["darkblue","#00008b"]    ["salmon","#fa9072"]]
// Even though the hash for salmon is 2, we notice that 2 has a value, so we skip over 2 and place it into the next open slot, 3.

// We will use separate chaining because it allows us to store more items than the length of our array.

// Building a HashTable class

class HashTable {
  constructor(size = 53) {
    // Constructor accepts a size and creates a new array of the passed size or 53 if no size is passed
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let primeNumber = 31;
    for (i = 0; i < Math.min(key.length, 100); i++) {
      total =
        (total * primeNumber + key.charCodeAt(i) - 96) % this.keyMap.length;
    }
    return total;
  }
  // Set accepts a key and a value, hashes the key, then stores the key-value pair in the hash table via separate chaining.
  // Since we implement separate chaining, we need to check if the indice already has a value, if it does we have to add it onto a nested structure
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [[key, value]];
    } else {
      this.keyMap[index].push([key, value]);
    }
  }
  // Get accepts a key, hashes the key and finds the value of that key
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
    return;
  }
}
