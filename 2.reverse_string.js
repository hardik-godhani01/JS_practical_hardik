// let string = "hardik";
// let str = Array.from(string);
// str.reverse();
// let str2 = str.toString();
// console.log(str2);

function reverse(str){
  let str1 = Array.from(str);
  str1.reverse();
  let str2 = str1.toString();
  return str2;
}
let string ="hardik";
let reverse_string = reverse(string);
console.log(reverse_string);
