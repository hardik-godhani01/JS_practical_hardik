function nestedAraay(array){
  return array.flat(Infinity);
}
const array = [1,[2,3],[4,5],4,[6]];
console.log(nestedAraay(array));