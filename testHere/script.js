let btnTextA = document.getElementById('btnA')
let coutdownA = document.getElementById('countdownA');
let btnTextB = document.getElementById('btnB')
let coutdowBn = document.getElementById('countdownB');

class timerVm {
    constructor(btn, countdown){
        this.btn = document.getElementById(btn);
        this.countdown = document.getElementById(countdown);
        this.inUse = false;
        this.time = 300;
    }
}
const timerVm1 = new timerVm('btnA', 'countdownA');
const timerVm2 = new timerVm('btnB', 'countdownB');

function resetTimer(timer) {
    timerVm1.inUse = false;
    timerVm1.time = 299;
}

function verify(){
    console.log('verify')
    if(timerVm1.time > 300){
        console.log('if verify')
    }else{
        console.log('else verify')
        if(timerVm1.inUse == false){
            timerVm1.inUse = true;
            intervalTimer = setInterval(startTimer, 8);
        }else{
            timerVm1.time += 300;
        }
    }
}

function startTimer(){
    if(timerVm1.time < 300){
        timerVm1.btn.innerText = '+30:00'
    }else{
        timerVm1.btn.innerText = 'Usar'
    }
        var minutes = Math.floor( timerVm1.time / 60);
        var seconds = timerVm1.time % 60;
        
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        timerVm1.countdown.innerHTML = `${minutes}:${seconds}`;
        timerVm1.time--; 
    if(timerVm1.time === -1){
        console.log('Parando o Timer')
        clearInterval(intervalTimer)
        resetTimer();
        timerVm1.countdown.innerText = '10:00'
        timerVm1.btn.innerText = 'Usar'
    };
};