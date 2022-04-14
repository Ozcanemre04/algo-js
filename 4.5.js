function calcDistance(A,B){

    return Math.sqrt(Math.pow(B[0]-A[0],2)+Math.pow(B[1]-A[1],2)*1.0);
}

console.log(calcDistance([1,1],[2,2]));
console.log(calcDistance([1,1],[3,1]));
console.log(calcDistance([4,1],[1,1]));
console.log(calcDistance([-2,2],[2,-2]));





