let btnText = document.getElementById('btnA')
let coutdown = document.getElementById('countdown');

var sera = 0;
var usando = false;
const startingMinutes = 0.1;
var time = startingMinutes * 60;

function verify(){
    if(usando == false){
        usando = true;
        startTimer();
    }
}

function startTimer(){
    if (sera == 0) {
        intervalTimer = setInterval(startTimer, 1000);
        sera = 1;
    }
        console.log(time)
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        coutdown.innerHTML = `${minutes}:${seconds}`;
        time--; 
    if(time === -1){
        console.log('parando timer');
        clearInterval(intervalTimer)
    };
}