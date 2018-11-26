// Multiple Pointers Pattern

// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a
// subsequence of the characters in the second string.
// In other words, the function should check whether the characters
// in the first string sppear somewhere in the second string, without
// changing their order

function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let matches = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      matches++;
      pointer1++;
      pointer2++;
    } else {
      pointer2++;
    }
  }
  if (matches === str1.length) {
    return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
