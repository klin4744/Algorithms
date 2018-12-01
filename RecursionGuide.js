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

// If a call stack is full, we call this a Stack overflow! this happens if there is either no base case or the wrong thing is returned.

/////////////////////////////
// Helper Method Recursion //
////////////////////////////

// We have a main function which calls a helper function which calls itself

function outer(input) {
  var outerScopedVariable = [];
  function helper(helperInput) {
    // modify the outer scoped varibled
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}

// Real example, collect all the odd values in an array
function collectOddValues(arr) {
  let result = []; // initialize our answer array
  function helper(helperInput) {
    //initialize helper function
    // The helper function just checks for odd numbers and pushes them into our intialized empty array
    if (helperInput.length === 0) {
      return; //Our base case, if we recieve an empty array, exit execution
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1)); // We call array again with a new array that doesnt have the 0 index

    // arr.slice returns a copy of an array from arg1 = begining, arg2 = end. slice(1) here returns the array we passed in without its 0 index element.
  }
  helper(arr); // call our helper function and pass in our input
  return result;
}

//////////////////////
// *Pure Recursion* //
//////////////////////

// Recursion without using a helper function

function collectOddValuesP(arr) {
  let newArr = []; // Initialize a answer/ empty variable

  // Set the base case, if the arr length passed into our collectOddValuesP function is 0, exit the function

  if (arr.length === 0) {
    return newArr;
  }

  // The coding logic part, check if the first item in the array passed into our function is odd, if it is, push it into our newArr intialized at the tep
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
// Calling our function again, newArr.concat allows us to append array values to newArr. collectOddValues, our original function is called here but we are passing in the input array minus the first item (we are making a copy from the first index to the end then passing it in)

//Everything we loop, we're creating more new arrays and pushing the 0 index into the new array if the 0 index of the input is odd
// We then are concatenating this newArray or array containing only the one odd number to the array directly on the stack below it

// Example : collectOddValues([3,1,9,10,1])
// Call stack 1 : newArr = [3] => our first number is odd so it is added to new array
// now newArr = newArr.concat(collectOddvalues([1,9,10,1]))
// Call stack 2 : newArr = [1], first number is odd
// Call stack 3: newArr = [9]
// Call stack 4 : newArr = [], first number is not odd, nothing is pushed
// Call stack 5: newArr = [1]
// Call stack 6: return is called immediately since array has no length
// Call stack 5 => newArr = [1].concat([]) = [1]
// Call stack 4 => newArr = [].concat([1]) = [1]
// CS 3 => newArr = [9].concat([1]) = [9,1];
// CS 1 = newArr = [3].concat([1,9,1]) = [3,1,9,1]
