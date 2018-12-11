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

// For items without a number to the second right, we declare the number as a 0 in that position and group it in 0

// Reform again
// [902,4,7,408,29,9637,1556,3556,8157,4386,86,593]
// Repeat again for third digit
// 0: 4,7,29,86
// 1: 8157
// 2:
// 3: 4386
// 4: 408
// 5: 593, 3556, 1556
// 6: 9637
// 7:
// 8:
// 9: 902

// Reform again and do again (we have to repeat for as many integers that our longest number has, in this case 4 times)
// [4,7,29,86,8157,4386,408,1556,3556,593,9637,902]
// Repeat for 4th digit now
// 0: 4,7,29,408,593,902
// 1: 1556
// 2:
// 3: 3556
// 4: 4386
// 5:
// 6:
// 7:
// 8: 8157
// 9: 9637

// Reform one last time
// Take order already in buckets
// [4,7,29,408,593,902,1556,3556,4386,8157,9637]

/////////////////////
// Helper methods //
///////////////////

// First helper getDigit(num,place) - returns the digit in num at the given place value

// Example getDigit(12345,0);// 5
// We will go the other direction in this case, for radix sort. Reverse indexing.

function getDigit1(num, place) {
  return parseInt(num.toString()[num.toString().length - 1 - place]);
}

// Second solution
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}
// Example 7323,2
// Take the number and divide by 10^i, in this case divide by 10^2 or 100
// 73.23
// Math.floor it  => 73
// Then return the remainder after dividing by by
// 73 & 10 => 3

// Second helper will give us the number of digits in the given number
// digitCount(num)
// digitCount(1234) = 4
function digitCount1(num) {
  return num.toString().length;
}

// Or with math
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}
// in this solution we just find the log base 10 of a number then add 1 to it

// Last method
// mostDigits, given an array of numbers, returns the number of digits in the largest numbers in the list
// mostDigits([1234,4,5])  // 4
// Use digit count
function mostDigits(arr) {
  let total = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    total = Math.max(total, digitCount(arr[i]));
  }
  return total;
}

// Radix Sort Pseudocode
// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has
// loop from i=0 up to this largest number of digits
// For each iteration of the loop:
// Create buckets for each digit (0 to 9)
// Place each number in the corresponding bucket based on its ith digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// return list at the end!

// Attempt
function radixSort(arr) {
  for (let i = 0; i < mostDigits(arr); i++) {
    //Create buckets
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // Creates 10 empty sub arrays within an array
    for (let j = 0; j < arr.length; j++) {
      digitBuckets[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}
