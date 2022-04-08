//1
var y = [1, 2, 3, 4, 5];
let sum = 0;


for (let i = 0; i < y.length; i++) {
    sum += y[i];
}

console.log(sum);


//2

var x = [100,101,102];

let summ=0;

for (let n = 0; n < x.length; n++) {
    summ += x[n];
}

console.log(summ);


//other method

var z =[100,101,102];
 let somme =0;

 for(let n of z){
     somme+=n;
 }
 console.log(somme);



 var a =[1,2,3,4,5];
 let som = 0;

 for (let elem of a){
     som+=elem;
 }
 console.log(som);