let school = ["Gilles", "Jamie", "Jason", "Jeremy", "Martin", "Emre", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sebastien", "Tanguy", "Thibaud", "Zakaria"];



function pickLearner(inputAr,n){

    if(n >= inputAr.length)
    return inputAr;
    let arr =[];
    let array =[...inputAr]
    for(let i =0;i<n;i++){
        
        let random =Math.floor(Math.random()*array.length);
        
        arr.push(array[random]);
        array.splice(random,1)
    }
    return arr;
}



console.log(pickLearner(school,15));