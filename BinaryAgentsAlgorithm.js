function binaryAgent(str) {
  let lettersArr =[];
  let lettersArr1 =[];
  let compile = 0;
  let strArr = str.split(" ");
  console.log(strArr);
  strArr = strArr.forEach(function(element){
    for (let i=0; i<element[i].length;i++){
      if(element[0] == 1){
       compile += 128
      }
      if(element[1] == 1){
       compile += 64
      }
      if(element[2] == 1){
        compile += 32
       }
       if(element[3] == 1){
        compile += 16
       }
       if(element[4] == 1){
        compile += 8
       }
       if(element[5] == 1){
        compile += 4
       }
       if(element[6] == 1){
        compile += 2
       }
       if(element[7] == 1){
        compile += 1
       }
       lettersArr.push(compile);
       compile = 0;
    }
  })
 lettersArr.forEach(function(element){
    lettersArr1.push(String.fromCharCode(element));
  })

  str= lettersArr1.join("");
  return str;

}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));