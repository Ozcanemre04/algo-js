var min = prompt("min");
var max = prompt('max');
var current = prompt('current');


if(min > max){
    alert("error")
}

else if ((current < max) &&(current > min)) {
    alert("between")
}

else{
    alert('superior or inferior')
}