function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let nameArr = [];
  let altArr = [];
  let period = [];
  let planets = []
  let velocity;
 for (let i = 0; i<arr.length; i++){
   nameArr.push(arr[i].name);
   altArr.push(arr[i].avgAlt);
 }
 altArr.forEach(function(altitude){
   velocity = Math.sqrt((GM / (earthRadius + altitude)))
   period.push(Math.round(Math.PI*2 *(earthRadius+altitude)/ velocity ))
 })

for(let i=0; i<period.length; i++){
  planets.push({ name:  nameArr[i] ,  orbitalPeriod:   period[i]  })
}
console.log(planets);
return planets;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])


