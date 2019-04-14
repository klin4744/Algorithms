// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// With additonal data structures:
// Time complexity O(N);
function isUnique(str) {
  const strObj = {};
  for (let i = 0; i < str.length; i++) {
    if (!strObj.str[i]) {
      strObj.str[i] = 1;
    } else {
      return false;
    }
  }
  return true;
}

// Without additional data structures:

// Brute force
// O(N^2) time but O(1) space;
function isUnique2(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.legnth; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
