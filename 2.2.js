var min = Number(prompt("min"));
var max = Number(prompt('max'));
var current =Number(prompt('current'));


if(min > max){
    alert("error")
}

else if ((min < current)||( current < max)) {
    alert("the current is between min and max")
}

else{
    alert('the current is superior to max or inferior to min')
}