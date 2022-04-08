
//1

let array = [10,20,30,40];
let arrayCopy = [...array];
arrayCopy.push(6)
console.log(array);
console.log(arrayCopy);








//other method

let arr = [1,2,3,4,5];
let copy = arr.slice();
copy.push(6)
 console.log(arr);
 console.log(copy);


 //push method

 let arr2 =[2,4,6,8];
 let copy2 = [];
 copy2.push(...arr2);
 copy2.push(10)

 console.log(arr2);
 console.log(copy2);

