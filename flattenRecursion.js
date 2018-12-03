// Solution 1
function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  return arr.reduce(
    (prev, currentVal) =>
      Array.isArray(currentVal)
        ? prev.concat(flatten(currentVal))
        : prev.concat(currentVal),
    []
  );
}

// Solution 2
function flatten2(arr) {
  let newArr = []; //Initialize a new array

  // We want to make a for loop to iterate through the array and check if the iteration element is an array with Array.isArray, if it is we do a recursive call on it then concatenate it to the local newArr which can already have elements, we have to reassign here because concat returns a new array, does not modify our old newArr element.

  // Since our else statement only pushes an element into newArr if it isn't an array, our recursive call will continue to run until we reach non-array types.
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten2(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
