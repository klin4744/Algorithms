function smallestCommons(arr) {
  let divisible = [];
  let multiple = 1;
  let commonFactor = 0;
  let i;
  
  arr.sort(function(a,b){
    return b-a;
  })
  for(let i = arr[0]; i >= arr[1]; i--){
    divisible.push(i);
  }

do{
  commonFactor = multiple * divisible[0] * divisible[1];
  for(i=2; i < divisible.length; i++ ){
    if(commonFactor % divisible[i] !== 0){
      break;
    }
  }
  multiple ++;

} while( i !== divisible.length);
 console.log(commonFactor)

  return commonFactor;

  console.log(divisible);

  return arr;
}


console.log(smallestCommons([5,1]));
