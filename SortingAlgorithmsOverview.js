// What is sorting?
// The process of rearranging the items in a collection so that the items are in some kind of order

// Examples:
// Sorting numbers from smallest to largest
// Sorting names alphabetically
// Sorting movies based on release year
// Sorting movies based on revenue

function sort(arr) {
  return arr;
}

sort([23, 45, 6, 12, 13]); // [6,12,13,23]

// Why learn sorting?
// Very common in coding
// Every sorting algorithm has different pros or cons, they work better in different scenarios (different kinds of data)
// We also want to understand how built in sort methods work, so we know when we should use them over another!
// Classic interview problems!

// Elementary sorting algorithms //
// Bubble Sort //
// Selection Sort //
// Insertion Sort //

// These sorting methods are not common but are a good introduction to sorting.

// Understanding JavaScript's array.sort method
// [6,4,15,10].sort() // [10,15,4,6]
// ["Steele","Colt","Data Structures", "Algorithms"].sort() // ["Algorithms","Colt","Data Structures","Steele"]
// Strangely, when we sort numbers, we get some strange random order

// This is because the array.sort method in JavaScript converts all of the array objects into strings then orders them by unicode if we do not pass in an optional comparator function
// The comparator takes two elements, a and b, JavaScript will sort these elements based on whether a positive or negative number is passed when a is compared to b. For example, if we use the comparison return a-b, and a = 7 , b = 9 since a-b is a negative value, JavaScript will place a first in the array because it is a smaller value!

// Comparing by value
// Example [6,4,15,10].sort( (a,b) => a-b) // [4,6,10,15]
// Comparing by string length
// ["Steele","Colt","Data Structures", "Algorithms"].sort( (str1, str2) => str1.length - str2.length)

// Continue in bubbleSort.js file!
