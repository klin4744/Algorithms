// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks wheter there are any duplicates among the arguments passed in. You can solve this using the frequency pattern or the multiple pointers pattern

// Restrictions:
// Time Complexity - O(n), Space Complexity - O(n)

// Frequency Counter Pattern
function areThereDuplicates() {
  const args = [...arguments];
  const obj = {};
  for (let i = 0; i < args.length; i++) {
    obj[args[i]] ? obj[args[i]]++ : (obj[args[i]] = 1);
  }
  for (let i = 0; i < args.length; i++) {
    if (obj[args[i]] > 1) {
      return true;
    }
  }
  return false;
}

//Multiple Pointers Pattern
function areThereDuplicatesP() {
  const args = [...arguments];
  const sorted = args.sort();
  let pointer1 = 0;
  let pointer2 = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[pointer1] === sorted[pointer2]) {
      return true;
    }
    pointer1++;
    pointer2++;
  }
  return false;
}

console.log(areThereDuplicatesP(1, 2, 3, 3, 4, 5, 6));
console.log(areThereDuplicatesP(1, 2, 2));
console.log(areThereDuplicatesP(1, 2, 3));
console.log(areThereDuplicatesP("a", "b", "c", "a"));
