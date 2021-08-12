let timer = document.getElementById('time');
let number = document.getElementById('nums');
let answer = document.getElementById('ans');
let start = document.getElementById('start');
let sub = document.getElementById('sub');
let submit1 = document.getElementById('submit1');

let rnum,max = 10,time,min=0;

function config(){
    submit1.style.opacity = "0";
    start.style.opacity = "0";
    sub.style.opacity ="0";
    answer.style.display = "none";
    number.style.display = "block";
    timer.style.display = "block";
}

function timeOut(){
    timer.style.display = "none";
    number.style.display = "none";
    answer.style.display = "block";
    submit1.style.opacity = "1";
    sub.style.opacity = "1";
}

function randNumbers(){
    rnum = Math.floor(Math.random()* (max - min) + 1);
    number.innerHTML = rnum;
}

function game(){
    config();
    time = 10;
    randNumbers();
    let x =
    setInterval(function(){
        time = time - 1;
        timer.innerHTML = time;

        if(time<0){
            timeOut();
            clearInterval(x);
        }
    },500);
    console.log(time);
}

function win(){
    start.style.opacity = "1";
    start.value = "Next level";
    number.style.display = "block";
    number.innerHTML = "success";
    answer.value = "";
    min = max;
    max = max * 10;
}
function lose(){
    start.style.opacity = "1";
        start.value = "Try Again";
        number.style.display = "block";
        number.innerHTML = "Try Again!!";
        min = 0;
        max = 10;
}
function submit(){
    if(String(rnum) === answer.value){
        win();
    }
    else{
        lose();
    }
    
}