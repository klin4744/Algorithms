function steamrollArray(arr) {
  // I'm a steamroller, baby
  let flattenedArr = [];
  let flatten = function(element){
    if (Array.isArray(element) !== true){
      flattenedArr.push(element)
    }else{
      for (let arg in element){
        flatten(element[arg]);
      }
    }
  }
  arr.forEach(function(element){
    flatten(element)
  })
  return flattenedArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));