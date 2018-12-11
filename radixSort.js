///////////////////////
// Comparison Sorts //
/////////////////////

// The fastest comparison sort average is nlog(n), no matter which comparison sort we use the best average case is nlog(n)

// Can we sort any fast? YES, but not using comparisons, the limit is due to math.

// Moving onto special sorts //

//////////////////
// Radix Sort  //
/////////////////

// Radix sort is a special sorting algorithm that works on lists of numbers
// It never will make comparisons between elements
// It exploits the fact that information about the size of a number is encoded in the number of digits.
// More digits means a bigger number!

// How does it work?

// Example [1556,4,3556,593,408,4386,902,7,8157,86,9637,29]

// We make buckets for our numbers and start with the integer at the end of each number, if the last integer of the number matches the bucket end number, we place it in that bucket
// 0:
// 1:
// 2: 902
// 3: 593
// 4: 4
// 5:
// 6: 86, 4386, 3556, 1556
// 7: 7, 8157, 9637
// 8: 408
// 9: 29

// Looking at the right most digit to choose where to put them

// Now we put them back into the list, keeping the order that was in the bucket
// [902,593,4,1556,3556,4386,86,7,8157,9637,408,29]

// Now we repeat the process but move one unit to the left, so second digit from the right
// 0: 408, 7, 4, 902
// 1:
// 2: 29
// 3: 9637
// 4:
// 5: 8157, 3556, 1556
// 6:
// 7:
// 8: 86, 4386
// 9: 593
