function sum(a,b,c){
  return c= a + b ;
}
console.log("print before settimeout function");

setTimeout(() => {
  console.log("wait a just for 2sec."+":-"+ sum(5,10));
}, 2000);

console.log("Print after settimeout function");


