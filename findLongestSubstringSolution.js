// Given a string, find the longest substring in which all characters in the substring are unique characters.

// Use shifting window pattern

// Time complexity of solution must be O(N)

function findLongestSubstring(str) {
  // Set params
  let longest = 0; // Stores our longest string length
  let seen = {}; // An object that will be used to keep track of characters and their indexes
  let start = 0; // A variable that will serve as the starting index of our shifting window

  // Loop over the string
  for (let i = 0; i < str.length; i++) {
    // Destructure to save space and make code more readable
    let char = str[i];
    // If the character exists in our seen array, then we have seen it before. Since we need all unique characters, we have to skip over the last index that we've seen it at. Take [a,b,c,d,a] for example, to avoid seeing a twice, we can set our starting index for our shifting window to 1, thus we lose the repeating a!

    // If the current character exists within our seen obj, we need to adjust our window to remove the the time we saw the duplicate!
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // We set longest to the maximum value between itself and i-start + 1 where start is the begining index of our array, i is the ending index, and 1 has to be added because i starts at 0 so must be adjusted for length

    longest = Math.max(longest, i - start + 1);

    // We initialize the value of seen for any character to 1 plus its index because if we see it again, we do not want it to be a part of our new string, we want to skip over it!
    seen[char] = i + 1;
  }
  return longest;
}
