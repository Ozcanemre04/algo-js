
//1

let array = [10,20,30,40];
let arrayCopy = [...array];
console.log(array);
console.log(arrayCopy);

array.push(...arrayCopy);
console.log(array);
console.log(arrayCopy);

console.log("--------");
//2

let arr =[1,2,3,4,5];
let arrCopy = [...arr];
console.log(arr);
console.log(arrCopy);

let total = arr.concat(arrCopy);
console.log(total);




