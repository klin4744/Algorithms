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
