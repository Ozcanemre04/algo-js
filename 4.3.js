function rand10(){
    return Math.floor(Math.random()* 10)+1;
 
}
 
 console.log(rand10());
 let b = Number(prompt('number'))
function multiRand(n){

    let a =[];
    for(let i = 0;i<n;i++){
     a.push(rand10());
      
    }
    return a;
}

console.log(multiRand(5));

console.log(multiRand(b));




  



