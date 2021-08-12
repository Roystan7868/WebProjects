var button = document.getElementById("btn");
var colors = ['red','green','yellow','grey','purple']

function bgChange(){
    var color = Math.floor((Math.random()*colors.length)+1)
    document.body.style.backgroundColor = colors[color];
}