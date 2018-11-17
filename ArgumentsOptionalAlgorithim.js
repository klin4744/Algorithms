function addTogether() {
  const args = Array.from(arguments);
  console.log(args);
  for(let i = 0; i < args.length; i++){
    if(!Number.isFinite(args[i]) || !Number.isInteger(args[i])){
      return undefined;
    }
  };

  if (args.length > 1){
    return args[0] + args [1];
  }else{
    return function(arg2){
      if(typeof arg2 !== "number"){
        return undefined
      }else{
        return args[0] + arg2;
      }
    }
  }

}

console.log(addTogether(2,3));

