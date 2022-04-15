function manhattan(streetA,AvenueA,streetB,AvenueB){
    let result = Math.abs(streetA-streetB)+Math.abs(AvenueA-AvenueB);
    return result
}

console.log(manhattan(1,1,2,2));
console.log(manhattan(1,1,1,1));
console.log(manhattan(5,4,3,2));