// Write a recursive function that takes an object and returns a new object (without modifying input object) with all number values within it converted to string.

function stringifyNumbers(obj) {
  let keys = Object.keys(obj);
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === "object" && !Array.isArray(obj[keys[i]])) {
      newObj[keys[i]] = stringifyNumbers(obj[keys[i]]);
    } else if (typeof obj[keys[i]] === "number") {
      newObj[keys[i]] = obj[keys[i]].toString();
    } else {
      newObj[keys[i]] = obj[keys[i]];
    }
  }
  return newObj;
}
