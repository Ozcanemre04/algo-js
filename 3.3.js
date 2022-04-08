//1

let array = [10, 20, 30, 40];
let arrayCopy = [...array];

console.log(array);
console.log(arrayCopy);








//other method

let arr = [1, 2, 3, 4, 5];
let copy = arr.slice();

console.log(arr);
console.log(copy);


//push method

let arr2 = [2, 4, 6, 8];
let copy2 = [];
copy2.push(...arr2);


console.log(arr2);
console.log(copy2);

// copy with concat
console.log("concat");

let arr3 = [10, 20, 30, 40];

let copy3 = arr3.concat()

console.log(arr3);
console.log(copy3);