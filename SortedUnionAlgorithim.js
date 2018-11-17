function uniteUnique(arr) {
  let args = Array.prototype.slice.call(arguments);
  let concatArr = [];
  for(let i = 0; i< args.length; i++){
    concatArr = concatArr.concat(args[i]);
  }
  console.log(concatArr);
  console.log(concatArr.lastIndexOf(1));
  console.log(concatArr.indexOf(1));
  for(let i=0; i < concatArr.length; i++){
    while(concatArr.indexOf(concatArr[i]) !== concatArr.lastIndexOf(concatArr[i])){
      concatArr.splice(concatArr.lastIndexOf(concatArr[i]),1);
    }
  }
  return concatArr;
  


}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));