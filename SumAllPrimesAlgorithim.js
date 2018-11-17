function sumPrimes(num) {
let numArr = [];
  for(let i =0; i <= num; i++){
    numArr.push(i);
  }
let primeArr = numArr.filter(function(current){
   for (let i = 2; i < num; i++){
     if(current % i === 0 && i !== current){
       return false
     }
     if(current == 1){
       return false
     }
   }
   return true
  })
num = primeArr.reduce(function(initial, current){
  return initial + current;
})
  console.log(numArr);
  console.log(primeArr);
  return  num ;
}
console.log(sumPrimes(10));
console.log(sumPrimes(977));