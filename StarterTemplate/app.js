var ham = document.getElementById("burger");
var links = document.getElementById("disp");

function burger(){
    if(links.style.display === "block"){
        links.style.display = "none";
    }
    else{
        links.style.display = "block";
    }
}