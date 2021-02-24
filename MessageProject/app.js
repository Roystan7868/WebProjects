var text = document.getElementById("txt");
var button = document.getElementById("button");
var out1 = document.getElementById("out1");
var out2 = document.getElementById("out2");
var word1 = null,word2 = null;

function message(){
    word1 = text.value;
    if(word2 === null){
        word2 = word1;
    }
    else{
        out2.innerHTML = word2;
        word2 = word1;    
    }
    
    out1.innerHTML = word1;

}