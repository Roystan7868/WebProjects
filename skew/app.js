let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let c1 = document.getElementById('c1');
let sq1 = document.getElementById('sq1');

function skewerIn(){
    sq1.style.opacity = "1";
    sq1.style.transition = "1s";
    b1.style.transform = "skewY(-45deg)";
    b1.style.transition = "0.5s";
    b3.style.transform = "skewY(45deg)";
    b3.style.transition = "0.5s";
    b2.style.transform = "skewY(45deg)";
    b2.style.transition = "0.5s";
    b4.style.transform = "skewY(-45deg)";
    b4.style.transition = "0.5s";
}
function skewerOut(){
    sq1.style.opacity = "0";
    sq1.style.transition = "1s";
    b1.style.transform = "skewY(0deg)";
    b1.style.transition = "0.5s";
    b3.style.transform = "skewY(0deg)";
    b3.style.transition = "0.5s";
    b2.style.transform = "skewY(0deg)";
    b2.style.transition = "0.5s";
    b4.style.transform = "skewY(0deg)";
    b4.style.transition = "0.5s";
}