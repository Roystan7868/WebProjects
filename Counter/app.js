var count = document.getElementById("count");
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");
var num = 0;
function funcInc(){
    num = num + 1;
    count.innerHTML = num;
}

function funcDec(){
    num = num - 1;
    count.innerHTML = num;
}