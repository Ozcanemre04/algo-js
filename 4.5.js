function calcDistance(A1,A2,B1,B2){

    return Math.sqrt(Math.pow(B1-A1,2)+Math.pow(B2-A1,2)*1.0);
}

console.log(calcDistance(1,1,2,2));