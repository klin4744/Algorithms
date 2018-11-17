function checkCashRegister(price, cash, cid) {
  let changeArr = [];
  // Here is your change, ma'am.
  //variables
  let valueArr = [0.01,0.05,0.10,0.25,1.00,5.00,10.00,20.00,100.00]
  let change = cash - price ;
  console.log(change);
  let sameCoinTimes = 1;
  let arr1 = []
  let arr2=[];
  let initialBalance = 0;

  //loop that calculates change and returns the proper change into an array
  for (let i = 0; i<cid.length; i++){
    initialBalance += cid[i][1];
    if(initialBalance === cash-price){
      return {status: "CLOSED", change: cid}
    }
  }
  for(let i=valueArr.length-1; i >= 0 ; i--){
    if(cid[i][1] === 0){
      i--;
    }
    while(change >= valueArr[i]){
      if(cid[i][1] === 0){
        break;
      }
      change = (change - valueArr[i]).toFixed(2);
      console.log(change)
      arr1.push(cid[i][0]);
      arr2.push((valueArr[i])*sameCoinTimes)
      cid[i][1] -= valueArr[i];   
      sameCoinTimes += 1;
    }
    sameCoinTimes = 1;
  }
  if(change > 0){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  console.log(cid);
  console.log(arr2);
 
  // filter duplicates but keep largest value (value pushed last)
for(let i =0; i< arr1.length; i++){
  while(arr1.lastIndexOf(arr1[i]) !== arr1.indexOf(arr1[i])){
    arr1.splice(arr1.indexOf(arr1[i]),1)
    arr2.splice(arr1.indexOf(arr1[i]),1)
  }
  changeArr.push([arr1[i],arr2[i]]);
}

  console.log(changeArr)
  console.log(arr1);
  console.log(arr2);
  return {status: "OPEN", change: changeArr};
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
