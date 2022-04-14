let school = ["Gilles", "Jamie", "Jason", "Jeremy", "Martin", "Emre", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sebastien", "Tanguy", "Thibaud", "Zakaria"];



function pickLearners(inputAr,n){
    if(n >= 1&&n <= inputAr.length){
        
        return Array.from({length:n},() => pickLearner(inputAr));
}
}

console.log(pickLearners(school,4));



function pickLearner(inputAr){

    let random = Math.floor(Math.random() * inputAr.length);
    return inputAr[random];

}