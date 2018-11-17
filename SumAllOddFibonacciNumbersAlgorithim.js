function sumFibs(num) {
  let fibArr = [1];
  let finalAns = 0;
  let currentNum = 0;


  for(let i = 0; currentNum < num  ; i++){
    fibArr.push(currentNum + fibArr[0]);
    currentNum += fibArr[i];
  }
  let filteredArr = fibArr.filter(function(number){
    if (number % 2 !==0){
      return true
    }
    return false
  })
  finalAns= filteredArr.reduce( function(initial,current){
    return initial + current
  }
)
 
  console.log(fibArr);
  console.log(filteredArr);
  console.log(finalAns);
  return finalAns

}

console.log(sumFibs(75025));