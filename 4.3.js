function rand10(){
    return Math.floor(Math.random()* 10)+1;
 
}
 
 console.log(rand10());

 let a = Number(prompt("number"));
 
 function multiRand(n){
  return Array.from({length:n},() => rand10());
     
     

 }

 console.log(multiRand(5));
 console.log(multiRand(a));
  



