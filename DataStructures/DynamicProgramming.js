//////////////////////////
// Dynamic Programming //
/////////////////////////

// Dynamic programming is a method for solving a complex problem by breaking it down into a colelction of simpler subproblems, solving each of those subproblems just once, and storing their solutions

// Most problems cannot be solve with dynamic programming but those that can become much more time efficient through dynamic programming

// When can we use dynamic programming ?
// We need two things to gain the ability to use dynamic programming: Optimal Substructure and Overlapping Subproblems

// Overlapping Subproblems
// The problem can be broken down into many subproblems which are reused several times.
// Example
// The Fibonacci Sequence - If we wanted to find the 5th fibonacci number in the sequence, we'd had to find the sum of the 4th and the 3rd fibonacci numbers, this ends up making us go do to the fibonacci of 1 and 2 which we know are 1. This is overlapping because we end up reusing fib(3) to find fib(5) a few times. This has sub problems because we need to solve for fib(4), fib(3) to get fib(5).

// An example of non-overlapping subproblems
// mergeSort for example has several sub problems, we break down a larger array we want to sort to many smaller items then merge them back together in a sorted list. This has subproblems but we are not using the same pieces of reusing the same solution here at all to sort; everything is unique. This is not overlapping!
// Of course we can have special cases with evenly spaced repeat data such as 10 24 10 24, which will result in overlap.

// Optimal Substructure
// A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.
// Again fibonacci is a good example here because we need to calculate fibonnaci 3 to solve for fibonacci 5.
// Think of shortest path from a graph, we can find the shortest path from two unlinked nodes by using the shortest paths of smaller linked items.
// An example of something that doesnt work is longest simple path (cant repeat)
// A   -     B     -      D
//           C
// Longest paths:
// A to C:  A -> B -> C
// C to D:  C -> B -> D
// A to D: If we follow optimal substructure, we can combine our solution to the last two longest paths to calculate to through D aka: A -> B -> C -> B -> D, this however doesnt match the simple criteria since we have a repeat of B. This does not match optimal substructure since our other optimal solutions cant be used to calculate our final optimal solution: A -> B -> D.

// Writing a recursive solution:

// Since the fibonacci sequence exibits both features: optimal substructures, and overlapping subproblems. Lets write a recursive dynamic programming solution for the fibonacci sequence!

// What we know: fib(n) = fib(n-1) + fib(n-2)
// fib(2) is 1
// fib(1) is 1
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// How does this work?
// Example with fib(5)
// Since our base case only returns a value if n === 1 or n === 2, we continue to add to our call stack until we hit those cases
// Our first call:
// return fib(4) + fib(3)
// fib(3) goes on call stack
// fib(3) returns fib(2) + fib(1)
// fib(1) gets put on call stack and returns 1
// fib(2) + 1, fib(2) gets executed and returns 1
// fib(3) now finises execution since it has the values for fib(2) and fib(1), it returns 2
// fib(4) now executes and needs the value for fib(3) and fib(2), we already have these values but they will still execute all the way to base case. When fib 4 finishes running fib(5) returns a value;

// This solution is nice and works, but it is REALLY slow. Just for fib(5), we have 8 calls, at fib(6) we have 14 calls, fib(7) has 24 calls. This is O(2^n) which is REALLY not good.

// The problem is we are constantly repeating steps. When we calc fib(5), we calculate fib(3) twice. If we scale this up, there is TONS of repetition.

// What if we could remember old values?

// Memoization - storing answers to repeated subproblems in some kind of datastructure, so we can use it later.
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let ans = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = ans;
  return ans;
}
// We now have added a mechanism to store old answers and call them if we see them again! The way our function is setup, we recursively call the biggest call chain first fib(n-1), this means we will calculate all the smaller fibonacci numbers we need after the first half completes!

// Time complexity of memoization solution: Roughly   O(n).
// This is a HUGE improvement from the non-memoization iteration of this solution.

// Tabulation - A bottom up approach

// We've current been working from top-down, meaning we've been starting at fib(7) then moving down. Starting from the top then moving down.
// AKA starting with what we're trying to find and then moving down

// There is another approach to this that is innately bottom-up called tabulation. Tabulation stores the result of a previous result in a "table" (usually an array). This is usually done with iteration and can produce a better space complexity than our top-down approach.

// Tabulated fibonnaci example:

function fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fib[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
// In this case, we are essentially building the fibonacci sequence in an array from the bottom up until we reach whatever n is, then we return the fibonacci number at n. We initialize it with the base few numbers. This follows our dynamic programming principles because we are solving multiple smaller problems aka calculating the fibonacci numbers at new indexes, and there is overlap because we use the old sequence numbers to calculate new ones.

// This example could also be potentially better than the recursive solution because it doesn't really on call stacks. If we plug in a certain number in the recursive solution, we will take up too much memory space aka cause a stack overflow. Iteration will not cause a stack overflow.
