
function factorial(number){
  var fact = 1;
  while(number>0){
  fact = fact * number ;
  number--;
}
console.log(fact)
}
factorial(3);