function checklongestword(str){

  const newArr = str.split(' ');

  if(newArr.length === 0){
    return "string is not found" ;
  }

  let word = "";
  for(let i of newArr){
    if(i.length > word.length){
      word = i ;
    }
  }
  return word;
}

const string ="hello good morning. Have a great day";
console.log( checklongestword(string));
