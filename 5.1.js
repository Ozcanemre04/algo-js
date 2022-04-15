function askTvSerie(){
 let tvserie = { 
    name :prompt("favorite series?"),
 year : prompt('year of production?'),
 cast : []
}
let castMember = prompt('cast member ?' ,'end');
while(castMember !== 'end' ){
    tvserie.cast.push(castMember);
    castMember =prompt('write a cast member or write end', 'end')
}
return tvserie;
}

console.log(askTvSerie());