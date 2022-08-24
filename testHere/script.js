let btnText = document.getElementById('btnA')
let coutdown = document.getElementById('countdown');

var sera = 0;
var usando = false;
const startingMinutes = 5;
var time = startingMinutes * 60;

function verify(){
    console.log('verify')
    if(time > 300){
        console.log('if verify')
    }else{
        if(usando == false){
            usando = true;
            startTimer();
        }else{
            time += 300;
        }
    }
}

function startTimer(){
    if (sera == 0) {
        intervalTimer = setInterval(startTimer, 10);
        sera = 1;
    }
    if(time < 300){
        btnText.innerText = '+30:00'
    }else{
        btnText.innerText = 'Usar'
    }
        console.log(time)
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        coutdown.innerHTML = `${minutes}:${seconds}`;
        time--; 
    if(time === -1){
        btnText.innerText = 'Usar'
        console.log('parando timer');
        clearInterval(intervalTimer)
    };
}