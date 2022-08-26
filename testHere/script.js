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
    valueTotal.inUse = false;
    valueTotal.time = 299;
}


var valueTotal;

function choose(htmlValue){
    return htmlValue;
}

function verify(timer1){
    valueTotal = choose(timer1)
    if(valueTotal.time > 300){
        console.log('if verify')
    }else{
        console.log('else verify')
        if(valueTotal.inUse == false){
            valueTotal.inUse = true;
            intervalTimer = setInterval(startTimer, 8);
        }else{
            valueTotal.time += 300;
        }
    }
}

function startTimer(){
    if(valueTotal.time < 300){
        valueTotal.btn.innerText = '+30:00'
    }else{
        valueTotal.btn.innerText = 'Usar'
    }
        var minutes = Math.floor( valueTotal.time / 60);
        var seconds = valueTotal.time % 60;
        
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        valueTotal.countdown.innerHTML = `${minutes}:${seconds}`;
        valueTotal.time--; 
    if(valueTotal.time === -1){
        console.log('Parando o Timer')
        clearInterval(intervalTimer)
        resetTimer(valueTotal);
        valueTotal.countdown.innerText = '10:00'
        valueTotal.btn.innerText = 'Usar'
    };
};