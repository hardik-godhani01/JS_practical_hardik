// function factorial(number){
//   while(number != 0){
//     var fact=0;
//     fact = fact * number-1 ;
//   }
//   console.log(fact);
// }
// factorial(5);

function factorial(number){
  var fact = 1;
  while(number>0){
  fact = fact * number ;
  number--;
}
console.log(fact)
}
factorial(3);