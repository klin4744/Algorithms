function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  let newArr = [];
  newArr.push(arr[0].toUpperCase());
  return newArr.concat(capitalizeWords(arr.slice(1)));
}

capitalizeWords(["i", "am", "learning", "recursion"]); // ['I', 'AM', 'LEARNING', 'RECURSION']
