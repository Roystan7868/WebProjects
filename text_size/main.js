var slider = document.getElementById("slide");
var txt = document.getElementById("sub");
var output = document.getElementById("out");

slider.oninput = function(){

    if(slider.value < 10){
        txt.style.fontSize = "xx-small";
    }
    else if(slider.value > 10 && slider.value<20){
        txt.style.fontSize = "x-small";
    }
    else if(slider.value > 20 && slider.value<40){
        txt.style.fontSize = "small";
    }
    else if(slider.value > 40 && slider.value<50){
        txt.style.fontSize = "medium";
    }
    else if(slider.value > 50 && slider.value<70){
        txt.style.fontSize = "large";
    }
    else if(slider.value > 70 && slider.value<90){
        txt.style.fontSize = "x-large";
    }
    else{
        txt.style.fontSize = "xx-large";
    }

    output.innerHTML = slider.value;

}