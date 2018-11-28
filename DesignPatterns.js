//Design Patterns Cheat Sheet

// Frequency Counter Pattern //
// The Frequency Counter Pattern uses objects or sets to collect values/frequencies of values
// This pattern is used o avoid the need for nested loops or O(N^2) operations with arrays/strings

//Example : Write a function called same, which accepts two arrays. Return true if every value in the array has it's corresponding value squared in the second array, the frequency values must be the same

// same([1,2,3],[4,1,9]) -> true, okay for order to be mixed up
// same([1,2,3],[1,9]) -> false
// same([1,2,1],[4,4,1]) -> false, freuqency must be the same, should have two 1s and 1 4

// A normal time complexity N^2 solution
function same(arr1, arr2) {
  // If they are different lengths, we know that they cannot match the conditions, return false in this case
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop through the length of arr1 and check if arr2 contains the squared value of arr1 for each index iteration using index of, if it doesn't, return false, otherwise remove it from arr2 so we do not match with it again using indexOf.
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr.splice(correctIndex, 1);
  }
  // if the for loop doesn't pass false, we move pass true
  return true;
}
// for loops, and indexOf loops, this creates a nested loop

// The pattern, time complexity - O(n)
function betterSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}; //Counts the frequency of values in array1
  // example {1:1, 2:2, 3:1}
  let frequencyCounter2 = {}; //Counts the frequency of values in array2
  // example {9:1, 1:1, 4:2}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // we construct the objects above using two for loops
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
      // the key value in object1^2 must be a key name in frequencyCounter 2, otherwise return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
      //the frequency of a key in frequencyCounter1 must match the frequency of a key in frequency counter 2, using the case of arr1, 2 appears twice, we have a key value of 2 in object 1, we first see that 2^2 is a key in frequency counter 2, so we move onto our next if statement. Then we check if the key value frequencyCounter1[2] or the frequency of that number is equivalent to frequencyCounter2[4], the frequency of that value squared in our second arr.
      // is 2^2 a key in object 2? if it is, does 2^2 appear as many times in object 2 as the amount of times 2 appears in object 1? if yes move forward
    }
  }
  return true;
}

// If we have 1000 inputs, the frequency counter approach does 3000 iterations, the regualr approach does 1000^2 = 1,000,000 approaches

//Anagram approach
// Given two strings, write a function to determine if the second string is an anagram of the first, An anagram is a word or pharse formed by rearranging the letters of another, such as cinema formed from iceman
// validAnagram("rat","car") -> false

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let letter in str1) {
    let char = str1.charAt(letter);
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let letter in str2) {
    let char = str2.charAt(letter);
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}
validAnagram("awesome", "fowoe");

// Better solution
function betterAnagram(str1, str2) {
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    // loop through the first string, then use the terinary operator, check our object and see if the key for the current letter on the iteration exists, if it does, add 1 to it, if not, add it and set it equal to 1
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
      // if our object doesn't contain a letter in string 2, return false. This will also return false if the value of the key is equal to zero!
    } else {
      lookup[letter] -= 1;
      // If the letter exists in our object, subtract it from that key value in our object, if the frequency of the letter becomes zero and the letter appears again, we will return false because of the if statement above
    }
    //if all letters in lookup are set to zero and do not appear again after they are set to zero, return true
    return true;
  }
}

// Example: betterAnagram("anagrams","nagaramm");
// lookup = {a:3, n:1, g:1, r:1, m:1 }
// the last for loop iterates through "nagaramm" and, if it finds a key in our lookup object and that key value isn't zero, itll subtract 1
// after our first iteration, we find n and subtract 1 from n in out lookup object {a:3, n:0, g:1, r:1, m:1}
// we continue until our object is "empty" {a:0, n:0, g:0,r:0,m:0} or in otherwords when we are done looping through the second string
// if there were another m in our second string, our for loop would see that the key m in the lookup object is already 0, this means that it is falsy! so our if statement if(!lookup[letter]) is true and will return false

//    -----------    //
// Multiple Pointers //
//    -----------    //
// Multiple pointers - creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// -> this is really good for solving problems with minimal space complexity
// Example, have an ordered list (array or string)
// [-4,-3,-2,-1,0,1,2,5]
// "j9fuh9frugherugeji"
// there are two pointers/ variables that point to a position in the string or array

//Example
// Write a function called sumZero that accepts a sorted array of integers. Find the first pair where the sum is 0, return an array that includes both values that sum to zero or undefined if the pair does not exist
// Must be sorted for this to work!

// Simple solution but bad time complexity (O(N^2))
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// this solution uses a nested loop

// For multiple pointers, start two pointers, each at a different location, in this case since we have an ORDERED list, we can add a pointer to the front and one to the end and only move the pointer based on two conditions
// [-4,-3,-2,-1,0,1,2,5]
// In this case we set a pointer at 5 and one at -4, for our first sum, we get 1, since 1 is greater than 0 and this is an ordered list where 5 is our largest number, we just have to move our right pointer to the left one
// now with our first pointer still at -4, and our second pointer at 2, we get -2, which is negative and tells us to move the left pointer to the right
// we continue this pattern until we either get 0 or return undefined.

// Multiple pointers solution

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// we have two pointers here: left and right. Left corresponds to the first item in our array (index 0), and right corresponds to the last. Using a while loop, we can assume left is always going to be smaller than right because it starts from index 0. This lets our while loop run. Inside the loop, we set condiitons to match the problem, we increment the left side if our sum is negative because we have an ordered list and the left has our smallest numbers or highest magnitude negative numbers, we increment the right side if we get a number greater than zero. The loop will stop if left passes right or if our sum equals 0, this reduces our time complexity to O(N) and our space complexity to O(1) as we create an array with only items everytime!

// Time complexity O(N), Space complexity O(1)

// Example two, practice
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

// countUniqueValues([1,1,1,1,1,2]) // 2 -> 1 and 2
// countUniqueValues([]) // 0 -> none

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let pointer1 = 0;
  let pointer2 = 1;
  let count = 1;
  while (pointer2 < arr.length) {
    if (arr[pointer1] === arr[pointer2]) {
      pointer2++;
    } else if (arr[pointer1] !== arr[pointer2]) {
      count++;
      pointer1 = pointer2;
      pointer2++;
    }
  }
  return count;
}
// if our array isn't empty (length = 0), then set count = 1 and set the pointers to both start at the front of the array.
// since pointer2 is ahead of pointer1, we run a while loop until pointer 2 reaches the length of the array
// if arr[pointer1] === pointer[2], we shift pointer 2 one position right. Since we arent moving pointer1 to the right as well, this lets us check for repeated numbers as we compare consecutive numbers with pointer1. In the case that they are not equal, we add 1 to count because that means a unique value has popped up and we set pointer 1 equal to pointer 2, then add 1 to pointer 2 to move pointer 1 back next to pointer 2. This case is used because we incremented pointer 2 by itself in the case there were repeated numbers

//    -----------    //
// Sliding Window Patten //
//    -----------    //

// The sliding window involves creating a window which can be either an array or a number from one positon to another. Depending on a certain condition, the window either increases or closes (and a new window is created). This is a great pattern for keeping track of a subset of data in an array/string.

// Some problems we can solve wth this pattern
// Finding the longest sequence of unique characters in a string
// Usually the window will move from left to right

// Example
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10

// Inefficient solution
function maxSubarraySum(arr, num) {
  // We cannot find a consecutive sequence of numbers that is greater than the length of the array!
  if (num > arr.length) {
    return null;
  }
  // Max is the current maximum number, if we want to include negative sums we have to set it to some very large negative number
  let max = -Infinity;
  // We dont want i to reach the end of the array, instead we want to leave it enoguh room so that we can add two more to our final iteration
  // ([1,2,3,4,5,6],3)
  // Here we want to stop at 4 because we want our second loop to add 5 and 6 or the two following numbers, if i was set to 6, we would end up adding undefined!
  // Since i is our starter, we do not want to start at the end of the array
  // 6-3+1 = 4, means our loop stops at index 3 which lets us consider the other two numbers in the array.
  for (let i = 0; i < arr.length - num + 1; i++) {
    // temp stores our sum for each loop
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
      // if i=0, j will be equal to 0,1,2, summing those three numbers into temp and so on. We add i to j so i always serves as a starting pointer for j to add
    }
    // comapre temp to max and set it to max if it is larger
    if (temp > max) {
      max = temp;
    }
    return max;
  }
}
// This solution is not good because it is N(O^2) complexity!

// Better solution

function maxSubarraySumR(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// O(N) - Complexity
// The first loop sums together our first three values and store it into a variable
// Our next loop, subtracts the first number in the array, then adds the next array item for each iteration! we then do comparisons to see if we need to reset Math.max.

////////////////////////////////
// Divide and Conquer Pattern //
////////////////////////////////

// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

// This pattern can tremendously decrease time complexity

// This pattern is really common

// For example

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed into the function is located. If the value is not found, return -1

// Simple solution

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
    return -1;
  }
}

// The binary search solution

// array must be sorted, divide an array in half. Check the end number of the first array. Since it is sorted, we know right away that the last item in the array is it's greatest number. Ignore the entire 1st half array. Now divide the second half array again and continue. Redo this until no more numbers!

function search(array, val) {
  // Declare variables max and min which will declare the min and max indexes of the array we're currently looking at
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    //For each while loop iteration, we have a variable called middle which divides the array in half
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    //We now determine half of the array to look at by evaluating the value at the half, if it is bigger than the number we're interested, we use the first half, if it is larger, we use the second half. We continue to loop this until we end up with one value
    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
    return -1;
  }
}

// This simplifies our time complexity from O(N) to Log(N)!!!!!!!
