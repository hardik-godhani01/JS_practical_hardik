function largest_number(array){
  let result = Math.max.apply(null, array);
  console.log(result);
}
arr = [10,20,30,40,50];
largest_number(arr);