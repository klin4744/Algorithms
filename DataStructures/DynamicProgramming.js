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

//
