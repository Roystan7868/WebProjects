var fire1 = document.getElementById("f1");
var fire2 = document.getElementById("f2");
var fire3 = document.getElementById("f3");

var ground = document.getElementById("gd");
var layer1 = document.getElementById("l1");
var layer2 = document.getElementById("l2");

var num = 1;
var num1 = 150;
var num2 = 120;
var str = "px";
const colors = ['red','yellow','blue','orange','#81d4fa','#01579b'];
function launch(){
    setInterval(function launch1(){
        // ground.style.opacity = num;
        // num = num - 0.1;
        if(num1 < 640 && num2 < 600){
            // layer1.style.opacity = "0";
            // layer2.style.opacity = "0";
            layer1.style.top = String(num1).concat(str);
        layer2.style.top = String(num2).concat(str);
        num1 = num1 + 100;
        num2 = num2 + 70;
        }
        for(i=0;i<colors.length;i++){
            const colorIndex = parseInt(Math.random()*colors.length)
            fire1.style.backgroundColor = colors[colorIndex-1];
            fire1.style.transition = "all 0.5s";
            fire2.style.backgroundColor = colors[colorIndex];
            fire2.style.transition = "all 0.5s";
            fire3.style.backgroundColor = colors[colorIndex+1];
            fire3.style.transition = "all 0.5s";
        }
    },200)

}
