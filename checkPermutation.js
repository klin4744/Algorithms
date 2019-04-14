// Given two strings, write a method to decide if one is a permutation of the other;

// Solution 1: sort then compare
function isPermutation(str1, str2) {
  if (str1.length != str2.length) return false;
  let newStr1 = str1.sort((a, b) => a - b);
  let newStr2 = str2.sort((a, b) => a - b);
  for (let i = 0; i < newStr1.length; i++) {
    if (newStr1[i] != newStr2[i]) {
      return false;
    }
  }
  return true;
}
// Solution 2: store in objects then compare the objects
