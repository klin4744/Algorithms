function fearNotLetter(str) {
 let arr = [];
 for(let i = 0; i < str.length; i++){
   arr.push(str.charCodeAt(i));
 }
 console.log(arr);
 console.log(arr[0]);
 console.log(arr[0 + 1] - 1)
 console.log(arr[3]);
 console.log(arr[3 - 1] + 1)
 for(let j = 0; j < arr.length - 1; j++){
  if(arr[j+1] !== arr[j] +1){
    return String.fromCharCode(arr[j] + 1 );
  } 
 }
 return undefined;

}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));