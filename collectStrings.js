function collectStrings(obj) {
  let newArr = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === "object") {
      newArr = newArr.concat(collectStrings(obj[keys[i]]));
    } else if (typeof obj[keys[i]] === "string") {
      newArr.push(obj[keys[i]]);
    }
  }
  return newArr;
}
