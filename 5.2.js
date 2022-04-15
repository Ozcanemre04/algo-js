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



   
function randomizeCast(tvserie){
    let newcast = [...tvserie.cast]

    return{
        ...tvserie,
       cast: newcast.sort()
    }
}
let lol = askTvSerie();
let lil = randomizeCast(lol);

console.log(lil);