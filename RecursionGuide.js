// What is recursion?

// Recursion is a process (function) that calls itself

//Why should we use recursion?

// Recursion is really common
// JSON.parse / JSON.stringify is often recursive
// document.getElementById and DOM traversal algorithms are trees, traversal involves using recursion
// Object traversal
// Complex data structures
// Cleaner alternative to iteration

// The Call Stack
// In almost all program languages, there is a built in data structure that manages what happens when functions are invoked: The call stack
// The call stack is a stack data structure
// Any time a function is invoked it is placed (pushed) on top of the call stack
// When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop) the top item from the stack.
// When we write recursive functions, we keep pushing new functions onto the call stack!

// Recursion Example

// All recursive functions have to essential parts
// A Base Case -> Our endpoint
// A recall with different inputs

// Example 1
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return; //Our base case, we return to exit the recursion
  }
  console.log(num);
  num--;
  countDown(num); // We call the function again if we are not at the base case
}
// Example 2
function sumRange(num) {
  if (num === 1) return 1; //Base case, our recursion ends here
  return num + sumRange(num - 1); // Recursive call, we place a new input
}
// Example sumRange(3)
// We skip the if statement because 3 !== 1
// Our first return gives 3 + sumRange(2)
// sumRange(2) returns 2 + sumRange(1)
// sumRange(1) returns 1 because of base case
// if we substitute into our original call (bottom stack), we have return 3 + 2 + 1 = 6
// sumRange(1) resolves first to give sumRange(2) the value of sumRange(1), sumRange(2) then resolves and passes 3 to sumRange(3), finally sumRange(3) resolves and ends the stack.

// Classic Example - Factorial

// The Iterative Case
function factorial(n) {
  let total = 1;
  for (let i = n; i > 1; i--) {
    total *= i;
  }
  return total;
}

// The recursive case
function factorialR(num) {
  if (num === 1) return 1;
  return num * factorialR(num - 1);
}

// 1. First imagine how the factorial will look like, if we find the factorial 3!, we have: 3*2*1, this means that we should be returning num * something that decrements num, we can do this by writing return num * factorialR(num-1)
// 2. Think about when the factorial function should end, in the regular math case, if the number is equivalent to 1, our final number does not change so we may set our endpoint to 1

// Common recursion problems

// 1. No base case - ALL RECURSIVE FUNCTIONS NEED BASE CASES, if there is no base case a recursive function will never end. This will cause our callstack to overflow until it reaches a maximum size (~10,000 calls) resulting in an error
// 2. Returning the wrong thing - For example returning num * factorial(num), we will never hit our base case and cause the recursion to hit the max call size. Make sure that you return something that can resolve.
