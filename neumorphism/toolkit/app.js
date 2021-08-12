var box = document.getElementById("box");
var box2 = document.getElementById("box2");
var bradius = document.getElementById("bradius");
var bcolor = document.getElementById("bcolor");
var bs1 = document.getElementById("bs1");
var bs2 = document.getElementById("bs2");
var blurs = document.getElementById("blur");
var scolor1 = document.getElementById("scolor1");
var scolor2 = document.getElementById("scolor2");

var px = "px";
var space = " ";
var set = "inset";
var light,dark,res;
var s1="0",s2="0",bl="0";
var value,aRgbHex,aRgb;

bradius.oninput = function(){
    box.style.borderRadius = String(bradius.value).concat(px);
}

bcolor.oninput = function(){
    box.style.backgroundColor = bcolor.value;
    box2.style.backgroundColor = bcolor.value;
    // console.log(bcolor.value);
    value = String(bcolor.value).slice(1);
    aRgbHex = value.match(/.{1,2}/g);
    // console.log(aRgbHex);
    aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    // console.log(aRgb);
}

bs1.oninput = function(){
    s1 = String(bs1.value);
    shadow();
}
bs2.oninput = function(){
    s2 = String(bs2.value); 
    shadow();
}
blurs.oninput = function(){
    bl = String(blurs.value);
    shadow();
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

scolor1.oninput = function() {
    let i = aRgb.indexOf(Math.max(...aRgb));
    if(i===0){
        res = 'rgb('.concat(String(aRgb[0]),',',scolor1.value,',',scolor1.value,')');
    }
    else if(i===1){
        res = 'rgb('.concat(scolor1.value,',',String(aRgb[1]),',',scolor1.value,')');
    }
    else{
        res = 'rgb('.concat(scolor1.value,',',scolor1.value,',',String(aRgb[2]),')');
    }
    light = res;
    console.log(light);
    shadow()
}
scolor2.oninput = function() {
    let i = aRgb.indexOf(Math.max(...aRgb));
    if(i===0){
        res = 'rgb('.concat(String(aRgb[0]+scolor2.value),',',scolor2.value,',',scolor2.value,')');
    }
    else if(i===1){
        res = 'rgb('.concat(scolor2.value,',',String(aRgb[1]+scolor2.value),',',scolor2.value,')');
    }
    else{
        res = 'rgb('.concat(scolor2.value,',',scolor2.value,',',String(aRgb[2]+scolor2.value),')');
    }
    dark = res;
    console.log(dark);
    shadow()
}
function shadow(){
    var ans = s1.concat(px,space,s2,px,space,bl,px,space,light,space,',','-',s1,px,space,'-',s2,px,space,bl,px,space,dark,space);
    box.style.boxShadow = ans;
}