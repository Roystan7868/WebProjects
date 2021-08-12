var next = document.getElementById("next");
var prev = document.getElementById("prev");
var image = document.getElementById("image");

var images = ['goku.png','joker.png','dragon.png'];
var num = 0;
function nextImg(){
    if(num >= 2){
        num = 0;
        image.src = images[num];
    }
    else{
        num = num + 1;
    image.src = images[num];
    } 
}

function previous(){
    if(num <= 0){
        num = 2;
        image.src = images[num];
    }
    else{
        num = num - 1;
    image.src = images[num];
    }
}