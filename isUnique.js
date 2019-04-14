// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// With additonal data structures:

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
