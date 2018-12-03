function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let result = [];
  result.push(arr[0][0].toUpperCase() + arr[0].substr(1));
  return result.concat(capitalizeFirst(arr.slice(1)));
}
