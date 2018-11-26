//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

//You solution MUST have the following complexities:
// Time: O(N)

function sameFrequency(int1, int2) {
  const str1 = int1.toString();
  const str2 = int2.toString();
  const obj1 = {};
  const obj2 = {};
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] ? obj1[str1[i]]++ : (obj1[str1[i]] = 1);
    obj2[str2[i]] ? obj2[str2[i]]++ : (obj2[str2[i]] = 1);
  }
  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]] !== obj2[str1[i]]) {
      return false;
    }
    if (!obj2[str1[i]] || !obj1[str2[i]]) {
      return false;
    }
  }
  return true;
}
