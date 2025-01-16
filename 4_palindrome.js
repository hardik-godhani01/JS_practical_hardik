function palindrome(str){
  let leftcheck = 0;
  let rightcheck = str.length-1 ;

  while(leftcheck < rightcheck){
    if(str[leftcheck] === str[rightcheck]){
      return "palindrom string" ;
    }
    leftcheck ++ ;
    rightcheck -- ;
  }
  return "not a palindrome string" ;
}

let string = "hardik";
console.log(palindrome(string));