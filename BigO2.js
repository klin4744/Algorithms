////////////
// Big O //
//////////

// Big O is one of the most important topics in algorithm design; Big O time specifically is the primary metric we use to determine if an algorithm is efficient

// An analogy
// Sending a really large file would take less time using one method than another. If the file is really small, sending it over email is reasonable but if it is REALLY large (1TB+) it could take an entire day to just upload the file and it may be faster to send the file via physical transport of it

// Time complexity
// Time complexity is what big O time means, it describes runtime
// For our analogy above we can describe the runtime as follows:
// Electronic transfer (via email) O(s) - If s is the size of the file. This means that the time to transfer the file increases linearly with the size of the file
// Airplane transfer O(1) with respect to file size - This means that as the size of the file increases, the time it takes to get the file to your friend will not increase. Time is constant

// No matter how big the constant is O(5), O(1000), etc. the linear O(s) will at some point surpass the constant. Think of the linear as a sloped line and the constant as a y= constant type line

// There are many more runtimes such as O(log N), O(N log N), O(N), O(N^2), and O(2^N)
// You can also have time complexities with multiple variables such as:
// O(wh) => time it takes to paint a fence would be dependent on its width and height
// if you need p layers of paint, that time can also depend on 3 variables O(whp)

// Big O, Big Theta, and Big Omega
// Academia uses Big O, Big Theta, and Big Omega to describe run times

// Big O: In academia, big O describes an upper bound on the time. For example we can say for certain that everyone will die before the age 10,000 but it is more reasonable to say that a fictional character, Jack will die at age 100. Big O considers the UPPER bound. To go through every iteration of an array, we would consider the runtime O(N) and not O(N^2) because we only need to go through as many iterations as there are items in the array although we can certainly say that in O(N^2) time, we will for sure be done iterating the array

// Big Omega: In academia, omega is equivalent concept but it is for the lower bound. Printing values in an array can be: omega(N), omega(log N), and omega(1) since we know it wont be faster than these run times

// Big Theta: In academia, theta means both O and omega, That means an algorithm is Big Theta(N) if it is both Omega(N) and O(N). This is the tightest description of runtime

// The industry definition of big O is actually closer to the academic definition of big theta, it is a tight description of runtime. We would thus consider the runtime of printing the elements in an array as O(N)

// It is common practice to use the tightest description of runtime

// Best Case, Worst Case, and Expected Case
// We can describe an algorithm three different ways. For example lets think of quick sort
// Quick sort picks a random element as a "pivot" and then swaps values in the array such that the elements less than the pivot appear before elements greater than the pivot. This does a partial sort. It then continues to recursively sort the right and left sides using a similar process.

// Best case: If all elements are equal then quick sort, on average will just traverse the array once. This is O(N) although there are implementations of quick sort that are faster.
// Worst case: If we repeatedly get unlucky and the largest element in the array continues to end up the pivot (happens if an array is reverse sorted). The recursive portion of the algorithm will not divide the array in half, it will continue to break the array in chunks of one element. This gives a run time of O(N^2)
// Expected case: Usually we'd expect the pivot to be either high or low but in sporadic times. This would give us a big O in between the best and the worst case: O(N log N)

// The best case is rarely used because any algorithm can be run in O(1) time if the inputs are just right

// For most algorithms, the expected case and the worst case are often the same. Both of these cases need to be described

// Space Complexity
// We also have to consider the memory that an algorithm can take up, this is called space complexity.

// Space complexity parallels time complexity, if we create an array of N elements, we'd have O(N) space complexity. If we created a matrix of size N * N, we'd need O(N^2) space complexity

// Stack space in recursive calls count too, the following code would take O(n) time and O(n) space

function sum(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  return n + sum(n - 1);
}
// Each call adds a level to the stack:
// sum(4)
//   => sum(3)
//     => sum(2)
//       =>sum(1)
//         =>sum(0)
// Each call added to the stack takes up actual memory, since we take up memory proportional to the input n (we have n calls added to stack), this is O(n) space complexity

// Another example
function pairSumSequence(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += pairSum(i, i + 1);
  }
  return sum;
}
function pairSum(a, b) {
  return a + b;
}
// In this example we call pairSum O(n) times with pairSumSequence but since these calls pop off the stack before the next call gets added on the stack, we only need O(1) space complexity. This happens because pairSum finishes evaluating before it is called again like it was in the recursive case.

// Drop the Constants
// It is possible for O(N) code to run faster than O(1) code, Big O just describes the rate of increase.
// Because of this, we can drop any constants in runtime => O(5N) can just be considered O(N)
// Not dropping the constants does not make the code any faster. For example, which of the following two is faster?:
// Example 1
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
  console.log(i + 2);
}

// Example2
for (let i = 0; i < 10; i++) {
  console.log(i + 2);
}
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

// Example 1 has one loop but it has two operations, example 2 have 2 loops but 1 operation per loop, it is almost impossible to say which one would be faster
