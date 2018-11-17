function convertToRoman(num) {
  let numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  let ans= "";
  for(let i=0; i<numbers.length; i++){

   while(numbers[i] <= num){
    ans += romanNum[i];
    num -= numbers[i];
  }

  }
 
  return ans;
 }
 
 console.log(convertToRoman(932));
 console.log(convertToRoman(900));
 console.log(convertToRoman(2));