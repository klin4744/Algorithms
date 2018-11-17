function truthCheck(collection, pre) {
  // Is everyone being true?
  let arr = [];
 
let checkKeys= function(object){
  if (object[pre]){
    arr.push(true);
  }else{
    arr.push(false);
  }
}
collection.forEach(function(object){
  checkKeys(object)
})
for(let i=0; i < arr.length; i++){
  if(arr[i] === false){
    arr = false;
    break;
  }
}
if(Array.isArray(arr)){
  arr = true;
}
return arr;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
