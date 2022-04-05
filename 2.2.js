var min = Number(prompt("min"));
var max = Number(prompt('max'));
var current =Number(prompt('current'));


if(min > max){
    alert("error")
}

else if ((min < current)&&( current < max)) {
    alert("between")
}

else{
    alert('superior or inferior')
}