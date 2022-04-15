let period = {
    earth:1,
    Mars:1.8808158,
    Venus: 0.61519726,
    Jupiter:11.862615,
}

let earth_year =365.25*24*3600;//31557600 second;
function spaceAge(second,planet){
   let age = (second/earth_year/period[planet]).toFixed(2);
   return age;
}



console.log(spaceAge(778300868.927,"Jupiter"))