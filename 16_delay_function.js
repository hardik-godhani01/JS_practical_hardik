function delay(callback , second){
  setTimeout(callback , second);
}

console.log('before delay print');
delay(()=>{
  console.log("3 second after print");
}, 3000);