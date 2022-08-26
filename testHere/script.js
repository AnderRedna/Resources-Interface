import { App } from '../src/App.js';
let btnTextA = document.getElementById('btnA')
let coutdownA = document.getElementById('countdownA');
let btnTextB = document.getElementById('btnB')
let coutdowBn = document.getElementById('countdownB');

function NotifStart(){
    App.start();
}

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

function resetTimer() {
    timerVm1.inUse = false;
    timerVm1.time = 299;
}

function verify(timer1){
    console.log('verify')
    if(timer1.time > 300){
        console.log('if verify')
    }else{
        console.log('else verify')
        if(timer1.inUse == false){
            timer1.inUse = true;
            intervalTimer = setInterval(startTimer, 8);
        }else{
            timer1.time += 300;
        }
    }
    return timer1;
}

function startTimer(){
    if(timer1.time < 300){
        timer1.btn.innerText = '+30:00'
    }else{
        timer1.btn.innerText = 'Usar'
    }
        var minutes = Math.floor( timer.time / 60);
        var seconds = timer.time % 60;
        
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        timer.countdown.innerHTML = `${minutes}:${seconds}`;
        timer.time--; 
    if(timer.time === -1){
        console.log('Parando o Timer')
        clearInterval(intervalTimer)
        resetTimer();
        timer.countdown.innerText = '10:00'
        timer.btn.innerText = 'Usar'
    };
};