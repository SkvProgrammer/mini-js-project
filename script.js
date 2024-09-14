function ageInDays(){
var birthYear = prompt("What year you were born?");
var ageInDayss = (2018 - birthYear) * 365;


var h1 = document.createElement('h1');
var answer = document.createTextNode('You are ' + ageInDayss + ' days');
h1.setAttribute('id','ageInDays');
h1.appendChild(answer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}