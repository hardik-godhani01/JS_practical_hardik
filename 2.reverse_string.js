function reverse(string){
  // console.log(string);
  string.forEach(element => {
    element[0] = element[string.length-1]
  });

}
reverse("hardik");