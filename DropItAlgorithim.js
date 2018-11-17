function dropElements(arr, func) {
  let copyArr = arr.slice();
  for(let i = 0; i < copyArr.length; i++){
    if(func(copyArr[i]) === true){
      break;
    }
    else if (func(copyArr[i]) !== true){
     arr.splice(arr.indexOf(copyArr[i]),1)
    }
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4, 5, 1], function(n) {return n < 3; }));
let test = function(n){return n<3}
console.log(test(2));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
